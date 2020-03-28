import * as M from "@discovery/prelude/data/maybe";
import { CosmosView } from "@discovery/components-luna/typings/cosmos";
import { Carousel, Props, State } from "../";

const Carousel1: CosmosView<Props, State> = {
  component: Carousel,
  name: `Carousel`,
  props: {
    data: [],
    autoplay: 3000,
    loop: true,
    templateIdM: M.of("basic"),
    images: []
  },
  state: {
    currentStep: 1,
    translateValue: 20,
    data: [],
    images: [],
    transitionAnimation: ""
  }
};

export default [Carousel1];
