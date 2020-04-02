import {
  isEmpty,
  map,
  path,
  pathOr,
  propEq,
  propOr,
  reject,
  and,
  not
} from "ramda";
import { vw } from "@discovery-dni/cd-tv.dom";
import {
  findInclude,
  resolveCollection,
  resolveRoute
} from "@discovery-dni/cd-tv.template-engine";

export const cardDataMapper = included => data => {
  // console.log(" card data ", data);
  let img;

  const images = path(["relationships", "images", "data"], data);
  if (images) {
    const includeImage = findInclude(included, "image");
    images.forEach(imageRef => {
      let image = path(["id"], imageRef);
      image = path(["attributes"], includeImage(image));
      //console.log("Image ", image)
      if (
        not(propEq("type", "channel", data)) &&
        (propEq("kind", "default", image) ||
          (and(propEq("kind", "poster", image)) && not(img)))
      ) {
        img = `${image.src}?f=jpeg&p=true&q=75&w=${Math.ceil(vw(19.21875))}`;
      }

      if (and(propEq("type", "channel", data), propEq("kind", "logo", image))) {
        let { width, height } = image;
        const ratio = width / height;

        if (width > height) {
          width = 275;
          height = 275 / ratio;

          if (height > 125) {
            img = `${image.src}?h=125`;
          } else {
            img = `${image.src}?w=${Math.floor(width)}`;
          }
        } else if (height > width) {
          height = 125;
          width = 125 / ratio;

          if (width > 275) {
            img = `${image.src}?w=275`;
          } else {
            img = `${image.src}?h=${Math.floor(height)}`;
          }
        } else {
          img = `${image.src}?h=125`;
        }
      }
    });
  }

  let route = path(["relationships", "routes", "data", 0, "id"], data);
  if (route) {
    route = resolveRoute(included, route);
  }

  return {
    route,
    name: pathOr("", ["attributes", "name"], data),
    secondaryTitle: pathOr("", ["attributes", "secondaryTitle"], data),
    image: img
  };
};

export const dataMapper = (data, included) => {
  const collection = resolveCollection(included, data);

  // let header = pathOr("", ["attributes", "title"], collection);
  // console.log("dataMapper ", header);
  return {
    attributes: {
      heading: pathOr("", ["attributes", "title"], collection),
      totalCount: data.attributes.totalCount
    },
    totalCount: 100,
    items: reject(
      isEmpty,
      map(cardDataMapper(included), propOr([], "items", collection))
    )
  };
};
