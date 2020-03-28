export const included = [
  {
    attributes: {
      alternateId: "tlc",
      customAttributes: {},
      hasLiveStream: true,
      identifiers: {},
      name: "TLC",
      packages: ["Free"]
    },
    id: "20000094",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      images: {
        data: [
          { id: "140281403-channel-20000094", type: "image" },
          { id: "140281402-channel-20000094", type: "image" }
        ]
      },
      routes: {
        data: [
          {
            id:
              "7fe21c00852f92dcbb2e13d25f9965645b76bd1fd3db39ecd070337c5f3326d5",
            type: "route"
          }
        ]
      }
    },
    type: "channel"
  },
  {
    attributes: {
      alias: "tv-latest-videos",
      component: {
        id: "content-grid",
        templateId: "basic"
      },
      kind: "manual",
      name: "tv-latest-videos",
      published: "2019-12-20T15:56:14.773011Z",
      revision: 6,
      state: "published",
      title: "Latest videos"
    },
    id: "222745833965373068212753612294743450981",
    relationships: {
      items: {
        data: [
          {
            id:
              "fd2a999ff3d5480d149841646b6b72638b582bc706d40e5bb5caef3e4329ce5b",
            type: "collectionItem"
          },
          {
            id:
              "e1bb69d8f2350c90f53a4c0c0ec9fae6a00188ab963ddb9acf0579af27a9ebd3",
            type: "collectionItem"
          },
          {
            id:
              "3c1b3abb0b8850e6b768c354007fbce38350b6114edff0e864fc85dec9463ec6",
            type: "collectionItem"
          }
        ]
      }
    },
    type: "collection"
  },
  {
    attributes: {
      alias: "all-videos",
      component: {
        id: "content-grid",
        templateId: "compact"
      },
      kind: "automatic",
      name: "All Videos",
      published: "2020-01-08T14:22:48.845707Z",
      revision: 24,
      state: "published"
    },
    id: "269429676216429794179227031536709978267",
    relationships: {
      items: {
        data: [
          {
            id:
              "7129d0953b64a63987bfc68984dc8309dcecd46770751203f249e6d65153c8e8",
            type: "collectionItem"
          },
          {
            id:
              "c5a06753032577fa6c8641fd6c5acab67d55a0e4124757042f57f324d5202fe1",
            type: "collectionItem"
          }
        ]
      }
    },
    type: "collection"
  },
  {
    attributes: {
      alias: "schedule-channel-preview",
      component: {
        id: "content-grid",
        templateId: "basic"
      },
      kind: "manual",
      name: "Schedule Channel Preview",
      published: "2019-12-17T15:09:16.272975Z",
      revision: 13,
      state: "published",
      title: "Shows"
    },
    id: "301339790816572039506426657282042288290",
    relationships: {
      items: {
        data: [
          {
            id:
              "b6842407b881a770f9f866cb2b846128d86dca0cb2b09c83cbb2527e512fa096",
            type: "collectionItem"
          },
          {
            id:
              "9aa5292b84e00c8ec93dc5b71acf6365b578d5f62938dafe0f5768738160caee",
            type: "collectionItem"
          }
        ]
      }
    },
    type: "collection"
  },
  {
    attributes: {
      region: "default"
    },
    id: "3c1b3abb0b8850e6b768c354007fbce38350b6114edff0e864fc85dec9463ec6",
    relationships: { video: { data: { id: "20046611", type: "video" } } },
    type: "collectionItem"
  },
  {
    id: "7129d0953b64a63987bfc68984dc8309dcecd46770751203f249e6d65153c8e8",
    relationships: { video: { data: { id: "20036450", type: "video" } } },
    type: "collectionItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "9aa5292b84e00c8ec93dc5b71acf6365b578d5f62938dafe0f5768738160caee",
    relationships: { show: { data: { id: "20006431", type: "show" } } },
    type: "collectionItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "b6842407b881a770f9f866cb2b846128d86dca0cb2b09c83cbb2527e512fa096",
    relationships: { show: { data: { id: "20006322", type: "show" } } },
    type: "collectionItem"
  },
  {
    id: "c5a06753032577fa6c8641fd6c5acab67d55a0e4124757042f57f324d5202fe1",
    relationships: { video: { data: { id: "20035944", type: "video" } } },
    type: "collectionItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "e1bb69d8f2350c90f53a4c0c0ec9fae6a00188ab963ddb9acf0579af27a9ebd3",
    relationships: { video: { data: { id: "20044491", type: "video" } } },
    type: "collectionItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "fd2a999ff3d5480d149841646b6b72638b582bc706d40e5bb5caef3e4329ce5b",
    relationships: { video: { data: { id: "20039517", type: "video" } } },
    type: "collectionItem"
  },
  {
    attributes: {
      alternateId: "traumautos",
      name: "Traumautos"
    },
    id: "20000139",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "motor",
      name: "Motor"
    },
    id: "20000140",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "entertainment",
      name: "Entertainment"
    },
    id: "20000141",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "lifestyle",
      name: "Lifestyle"
    },
    id: "20000144",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "tool-time",
      name: "Tool-Time"
    },
    id: "20000145",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "wissen",
      name: "Wissen"
    },
    id: "20000146",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "schatzsucher",
      name: "Schatzsucher"
    },
    id: "20000147",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "dmax-originals",
      name: "DMAX Originals"
    },
    id: "20000161",
    type: "genre"
  },
  {
    attributes: {
      alternateId: "alaska",
      name: "Alaska"
    },
    id: "20000162",
    type: "genre"
  },
  {
    attributes: {
      default: true,
      height: 648,
      kind: "logo",
      src:
        "https://eu1-test-images.disco-api.com/2019/12/19/channel-20000094-2525405601816111.png",
      width: 1250
    },
    id: "140281402-channel-20000094",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1691,
      kind: "poster",
      src:
        "https://eu1-test-images.disco-api.com/2019/12/19/channel-20000094-2525414430694664.jpg",
      width: 3007
    },
    id: "140281403-channel-20000094",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 720,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2017/11/15/show-6018-1510754204309.jpg",
      width: 1280
    },
    id: "20221837-show-20006018",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 720,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2017/12/12/show-6023-1513068268347.jpg",
      width: 1280
    },
    id: "20233956-show-20006023",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/01/18/show-6322-1516288691295.jpg",
      width: 1920
    },
    id: "20243342-show-20006322",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/01/18/show-6322-1516288691841.jpg",
      width: 1920
    },
    id: "20243343-show-20006322",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 720,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/01/26/show-6431-1516973554702.jpg",
      width: 1280
    },
    id: "20246525-show-20006431",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/03/05/show-6016-1520241922934.jpg",
      width: 1920
    },
    id: "20259591-show-20006016",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/03/05/show-6018-1520241982779.jpg",
      width: 1920
    },
    id: "20259592-show-20006018",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 720,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/03/show-6132-1522746646711.jpg",
      width: 1280
    },
    id: "20268328-show-20006132",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1017,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/09/show-6132-4486743757857084.jpg",
      width: 1808
    },
    id: "20270879-show-20006132",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 720,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/19/show-6431-5354805917636182.jpg",
      width: 1280
    },
    id: "20274004-show-20006431",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/24/show-6023-5796570397875283.jpg",
      width: 1920
    },
    id: "20275505-show-20006023",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "hero",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/27/show-6016-6041516870225844.jpg",
      width: 1920
    },
    id: "20276402-show-20006016",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2015/05/03/videoasset-16418-1510796318813.jpg",
      width: 1920
    },
    id: "223037-video-20035944",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2017/11/19/videoasset-16852-1511063653344.png",
      width: 1920
    },
    id: "226090-video-20036450",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/01/12/videoasset-19201-1515769438877.png",
      width: 1920
    },
    id: "241955-video-20039517",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/02/videoasset-22244-1522338384485.jpg",
      width: 1920
    },
    id: "267514-video-20044491",
    type: "image"
  },
  {
    attributes: {
      default: true,
      height: 1080,
      kind: "default",
      src:
        "https://eu1-test-images.disco-api.com/2018/04/26/videoasset-23508-5977198597658545.png",
      width: 1920
    },
    id: "276177-video-20046611",
    type: "image"
  },
  {
    attributes: {
      labelPriority: 1,
      labelVisible: false,
      name: "Free"
    },
    id: "Free",
    type: "package"
  },
  {
    attributes: {
      alias: "home",
      component: {
        id: "page",
        templateId: "basic"
      },
      name: "Home",
      published: "2019-12-20T09:12:51.607221Z",
      revision: 4,
      state: "published"
    },
    id: "92165857787866068704132353241976055156",
    relationships: {
      items: {
        data: [
          {
            id:
              "6c7eacefa8172e895499a8f822be2215a981f3046f4b704eec9e7e662db062ed",
            type: "pageItem"
          },
          {
            id:
              "ca823f7a0f5d7c42fafa5f695417e9c60b052ffaaf500f227190e81e5b810252",
            type: "pageItem"
          },
          {
            id:
              "78e464cf32efa708ccc36ba42bf7bd8e553c54515246b40f00bbd7e4b9a6edc2",
            type: "pageItem"
          }
        ]
      },
      routes: {
        data: [
          { id: "264819656382832031262942899639985908428", type: "route" },
          { id: "262994180078346906416215490604503533660", type: "route" }
        ]
      }
    },
    type: "page"
  },
  {
    attributes: {
      region: "default"
    },
    id: "6c7eacefa8172e895499a8f822be2215a981f3046f4b704eec9e7e662db062ed",
    relationships: {
      collection: {
        data: {
          id: "269429676216429794179227031536709978267",
          type: "collection"
        }
      }
    },
    type: "pageItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "78e464cf32efa708ccc36ba42bf7bd8e553c54515246b40f00bbd7e4b9a6edc2",
    relationships: {
      collection: {
        data: {
          id: "301339790816572039506426657282042288290",
          type: "collection"
        }
      }
    },
    type: "pageItem"
  },
  {
    attributes: {
      region: "default"
    },
    id: "ca823f7a0f5d7c42fafa5f695417e9c60b052ffaaf500f227190e81e5b810252",
    relationships: {
      collection: {
        data: {
          id: "222745833965373068212753612294743450981",
          type: "collection"
        }
      }
    },
    type: "pageItem"
  },
  {
    attributes: {
      canonical: false,
      url: "/home"
    },
    id: "264819656382832031262942899639985908428",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/goldrausch-in-alaska"
    },
    id: "46ab20da90100081014e68634d3c7f7d01a2f4c35acaec2c42576fb8642b9777",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/car-crash-tv"
    },
    id: "553137a9329e2968e2f26ae3da423a7fc52c998e40dbc9859a2b4a3b74745118",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/channel/tlc"
    },
    id: "7fe21c00852f92dcbb2e13d25f9965645b76bd1fd3db39ecd070337c5f3326d5",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/video/steel-buddies/fruehjahrsputz"
    },
    id: "89eeda3baa772978a21d8203d85307d3c1b2d637bae2d3fcaed815bf54dccc58",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/dmax-doku"
    },
    id: "b557cbd564f73fcc8d10818e0d688c83a68a212638b5062e463fb70e71899196",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/steel-buddies"
    },
    id: "be68b7a61143b9ea94e2dbdb5aac7aeb55e4003a14622b5c44b202cb5373cb3e",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/video/goldrausch-in-alaska/1000-unzen"
    },
    id: "c65cbd4ae83e055b3fac35bcd0b79b833fd9e42d9956789cfe7a9899755b1a9b",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/video/canopy-kings/canopy-kings"
    },
    id: "dc1b7a908700cbb4f162b9242750ac4b87187b230e91a4f7fd7013ab142c6455",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/canopy-kings"
    },
    id: "e58652b1a27723c107bda51cc2a4bd4927fb28e31cbd05ffae78b9875fd0ff74",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/video/dmax-doku/die-stubers"
    },
    id: "e5f1f0eaa8b1ecc953bd554b3e074f7b498b658445822912073fcd160ddbc3c8",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/show/fast-n-loud"
    },
    id: "fa9f9d35b25afdcfc90375b4ca4a5f51c0b25ddba702a389d7f7ce66c3e69f30",
    type: "route"
  },
  {
    attributes: {
      canonical: true,
      url: "/video/fast-n-loud/1965-chevrolet-impala"
    },
    id: "ff8039e80ff739ff6d63fdcb49d412cbbe91db5e53b099d3f2faef24e972a5f0",
    type: "route"
  },
  {
    attributes: {
      episodeCount: 0,
      id: "20005236",
      plannedEpisodeCount: 0,
      seasonNumber: 3,
      videoCount: 0
    },
    id: "20005236",
    type: "season"
  },
  {
    attributes: {
      alternateId: "fast-n-loud",
      analyticsId: "luna_20006016",
      customAttributes: {},
      description:
        "Autos sind ihre Leidenschaft! Mastermind Richard Rawlings und Profi-Mechaniker Aaron Kaufman suchen in Hinterhöfen und staubigen Garagen nach betagten Oldtimern, die sie in ihrer Werkstatt restaurieren können. Ihre Mission: Rost in pures Gold verwandeln! Vom 57er Chevy bis zum 73er Trans Am - in der „Gas Monkey Garage“ in Dallas, Texas, hauchen die Jungs abgewrackten US-Klassikern neues Leben ein, um sie dann mit sattem Gewinn auf Auktionen zu versteigern. Das Geschäftsprinzip ist dabei so simpel wie genial: Je cooler der Wagen nach dem Make-over aussieht, desto mehr Geld kommt in die Kasse. Und auch ihr Geschmack bei Oldtimern ist klar definiert: Am liebsten mögen es die Jungs „Fast n’ Loud“!",
      episodeCount: 71,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "Fast N' Loud",
      newestEpisodePublishStart: "2018-04-23T19:45:00Z",
      seasonNumbers: [1, 3, 4, 5],
      videoCount: 71,
      webExclusive: false
    },
    id: "20006016",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000139", type: "genre" },
          { id: "20000140", type: "genre" }
        ]
      },
      images: {
        data: [
          { id: "20276402-show-20006016", type: "image" },
          { id: "20259591-show-20006016", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "fa9f9d35b25afdcfc90375b4ca4a5f51c0b25ddba702a389d7f7ce66c3e69f30",
            type: "route"
          }
        ]
      },
      seasons: {
        data: [
          { id: "20004577", type: "season" },
          { id: "20004536", type: "season" },
          { id: "20005561", type: "season" },
          { id: "20004546", type: "season" }
        ]
      },
      tags: {
        data: [
          { id: "20002330", type: "tag" },
          { id: "20001876", type: "tag" },
          { id: "20001046", type: "tag" },
          { id: "20002332", type: "tag" },
          { id: "20002340", type: "tag" },
          { id: "20002331", type: "tag" },
          { id: "20002342", type: "tag" },
          { id: "20002327", type: "tag" },
          { id: "20002334", type: "tag" },
          { id: "20002378", type: "tag" },
          { id: "20002323", type: "tag" },
          { id: "20002326", type: "tag" }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      alternateId: "goldrausch-in-alaska",
      analyticsId: "luna_20006018",
      customAttributes: {},
      description:
        "Die Schatzsucher sind zurück: mit tonnenschweren Maschinen und schweißtreibenden Abenteuern. \n\nTodd Hoffman und seine Gefährten versuchen ihr Glück dieses Mal in Colorado. Dort wollen die Männer einen Neuanfang starten und 5000 Unzen Edelmetall ans Tageslicht befördern. \n\nTony Beets gibt sich beim Goldschürfen ebenfalls nicht mit Kinkerlitzchen ab. Schließlich hat sein riesiger Schwimmbagger eine Million Dollar gekostet. Diese Investition soll sich möglichst bald auszahlen.\n\nUnd Parker Schnabel kämpft in den neuen Folgen an zwei Fronten. Der junge Minen-Boss will die Konkurrenz mit einer Rekordausbeute übertrumpfen, um sich damit von alten Fesseln zu befreien.\n\nEhrgeizige Ziele und kräftezehrende Herausforderungen: Um ihre Pläne in die Tat umzusetzen, schuften die Abenteurer in der Wildnis härter als jemals zuvor.",
      episodeCount: 108,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "Goldrausch in Alaska",
      newestEpisodePublishStart: "2018-04-29T18:45:00Z",
      seasonNumbers: [2, 3, 6, 7, 8],
      videoCount: 115,
      webExclusive: false
    },
    id: "20006018",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000147", type: "genre" },
          { id: "20000162", type: "genre" }
        ]
      },
      images: {
        data: [
          { id: "20221837-show-20006018", type: "image" },
          { id: "20259592-show-20006018", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "46ab20da90100081014e68634d3c7f7d01a2f4c35acaec2c42576fb8642b9777",
            type: "route"
          }
        ]
      },
      seasons: {
        data: [
          { id: "20004575", type: "season" },
          { id: "20004607", type: "season" },
          { id: "20004585", type: "season" },
          { id: "20004539", type: "season" },
          { id: "20004608", type: "season" }
        ]
      },
      tags: {
        data: [
          { id: "20001075", type: "tag" },
          { id: "20001859", type: "tag" },
          { id: "20002520", type: "tag" },
          { id: "20001857", type: "tag" },
          { id: "20017615", type: "tag" },
          { id: "20002524", type: "tag" },
          { id: "20002527", type: "tag" },
          { id: "20000591", type: "tag" },
          { id: "20002519", type: "tag" },
          { id: "20001919", type: "tag" },
          { id: "20002514", type: "tag" }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      alternateId: "steel-buddies",
      analyticsId: "luna_20006023",
      customAttributes: {},
      description:
        "Ein tollkühner Mann in seiner fliegenden Kiste: Michael Manousakis hat bei seiner Atlantiküberquerung in einer 41 Jahre alten, russischen Antonov AN-2 gezeigt, aus welchem Holz er geschnitzt ist. Und der einmotorige Doppeldecker ist nicht das einzige historische Spielzeug des abenteuerlustigen Draufgängers: Auf dem Firmengelände der „Steel Buddies“ im Westerwald stehen Hunderte von alten Militärfahrzeugen aus aller Herren Länder - vom Hummer H1 bis zum Oshkosh Navy 3000 Fire Truck. Das Team von „Morlock Motors“ kennt sich mit stahlharten Geschäften bestens aus und kann alles beschaffen. Diese Doku-Serie begleitet die Motor- und Mechanik-Experten bei ihrer weltweiten Suche nach ausrangierten Armeefahrzeugen, die alle liebevoll restauriert werden.",
      episodeCount: 39,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "Steel Buddies",
      newestEpisodePublishStart: "2018-01-16T20:00:00Z",
      seasonNumbers: [1, 2, 3, 4, 5],
      videoCount: 42,
      webExclusive: false
    },
    id: "20006023",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000161", type: "genre" },
          { id: "20000140", type: "genre" }
        ]
      },
      images: {
        data: [
          { id: "20233956-show-20006023", type: "image" },
          { id: "20275505-show-20006023", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "be68b7a61143b9ea94e2dbdb5aac7aeb55e4003a14622b5c44b202cb5373cb3e",
            type: "route"
          }
        ]
      },
      seasons: {
        data: [
          { id: "20004564", type: "season" },
          { id: "20004548", type: "season" },
          { id: "20004556", type: "season" },
          { id: "20004562", type: "season" },
          { id: "20004557", type: "season" }
        ]
      },
      tags: {
        data: [
          { id: "20002011", type: "tag" },
          { id: "20002000", type: "tag" },
          { id: "20004690", type: "tag" },
          { id: "20002009", type: "tag" },
          { id: "20001046", type: "tag" },
          { id: "20002010", type: "tag" },
          { id: "20002013", type: "tag" },
          { id: "20002002", type: "tag" },
          { id: "20004907", type: "tag" },
          { id: "20001817", type: "tag" },
          { id: "20004686", type: "tag" }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      alternateId: "dmax-doku",
      analyticsId: "luna_20006132",
      customAttributes: {},
      description:
        'DMAX DOKU greift spannende Themen auf, die den Zuschauer wirklich fesseln - mit den Schwerpunkten Abenteuer, Reisen, Jobs und Gesellschaft. Diese Ausgabe zeigt Handwerks-Profis, die ihre Leidenschaft zum Beruf gemacht haben.\n\nBei den Extrem-Holzfällern in den Alpen muss jeder Handgriff sitzen. Selbst kleinste Fehler haben in diesem Job fatale Folgen.\n\nDie „Trucker-Ladies" lenken auf Deutschlands Autobahnen tonnenschwere Brummis durch den Verkehr, und die „Bootsbauer" konstruieren mit viel Geschick und Know-how Wasserfahrzeuge der Extraklasse.',
      episodeCount: 0,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "DMAX DOKU",
      seasonNumbers: [],
      videoCount: 5,
      webExclusive: false
    },
    id: "20006132",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000146", type: "genre" },
          { id: "20000161", type: "genre" }
        ]
      },
      images: {
        data: [
          { id: "20268328-show-20006132", type: "image" },
          { id: "20270879-show-20006132", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "b557cbd564f73fcc8d10818e0d688c83a68a212638b5062e463fb70e71899196",
            type: "route"
          }
        ]
      },
      tags: {
        data: [
          { id: "20001827", type: "tag" },
          { id: "20006661", type: "tag" }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      alternateId: "canopy-kings",
      analyticsId: "luna_20006322",
      customAttributes: {},
      description:
        "Klettern, Wintersport und Kajak fahren: Sarah und Burgess Carey lieben das Abenteuer. Zudem wünscht sich das Paar ein Freizeitdomizil mitten in der Natur. Und Django Kroner ist genau der richtige Mann für diesen Job. Denn der Handwerker hat drei Jahre in einem Baumhaus gelebt und kennt sich in seinem Metier bestens aus. Eine Hängebrücke, eine Freiluftdusche, eine Mini-Küche und eine großzügige Terrasse mit herrlichem Ausblick auf die Boone-Creek-Schlucht: Django und seine „Canopy Kings“ zimmern ihren Kunden ein Meisterwerk in den Blätterwald.",
      episodeCount: 0,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "Canopy Kings",
      seasonNumbers: [],
      videoCount: 1,
      webExclusive: false
    },
    id: "20006322",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000144", type: "genre" },
          { id: "20000145", type: "genre" }
        ]
      },
      images: {
        data: [
          { id: "20243342-show-20006322", type: "image" },
          { id: "20243343-show-20006322", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "e58652b1a27723c107bda51cc2a4bd4927fb28e31cbd05ffae78b9875fd0ff74",
            type: "route"
          }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      alternateId: "car-crash-tv",
      analyticsId: "luna_20006431",
      customAttributes: {},
      description:
        "Autofahren will gelernt sein! Aber nicht alle Verkehrsteilnehmer beweisen am Lenkrad Fingerspitzengefühl. Im Gegenteil, anstatt beim Spurwechsel in den Rückspiegel zu schauen und die Geschwindigkeitsbegrenzungen einzuhalten, benimmt sich so mancher PS-Rowdy in seinem Pkw, als würde die Fahrbahn ihm allein gehören. Dann wird die StVO plötzlich zur lästigen Nebensache. Unverantwortliche Raser, die auf der Straße Gas geben wie bei einem Formel 1-Rennen, Autos, die mit hochgeklappter Motorhaube fahren und Chaoten am Steuer, die dümmer sind als die Polizei erlaubt: „Car Crash TV“ zeigt dramatische Missgeschicke, Unfälle und Beinahe-Katastrophen, bei denen wie durch ein Wunder niemand ernsthaft verletzt wurde.",
      episodeCount: 0,
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      hasExpiringEpisodes: false,
      hasNewEpisodes: false,
      name: "Car Crash TV",
      seasonNumbers: [3],
      videoCount: 0,
      webExclusive: false
    },
    id: "20006431",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: { data: [{ id: "20000141", type: "genre" }] },
      images: {
        data: [
          { id: "20246525-show-20006431", type: "image" },
          { id: "20274004-show-20006431", type: "image" }
        ]
      },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "553137a9329e2968e2f26ae3da423a7fc52c998e40dbc9859a2b4a3b74745118",
            type: "route"
          }
        ]
      },
      seasons: { data: [{ id: "20005236", type: "season" }] },
      tags: {
        data: [
          { id: "20023672", type: "tag" },
          { id: "20003686", type: "tag" }
        ]
      }
    },
    type: "show"
  },
  {
    attributes: {
      group: "Tags",
      name: "alaska"
    },
    id: "20000591",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "autohof"
    },
    id: "20001046",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "abenteuer"
    },
    id: "20001075",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "garage"
    },
    id: "20001817",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "doku"
    },
    id: "20001827",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "schatzsucher"
    },
    id: "20001857",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "schatz"
    },
    id: "20001859",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "oldtimer"
    },
    id: "20001876",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "yukon"
    },
    id: "20001919",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "motor"
    },
    id: "20002000",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "panzer"
    },
    id: "20002002",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "armee"
    },
    id: "20002009",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "flugzeug"
    },
    id: "20002010",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "militärfahrzeug"
    },
    id: "20002011",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "militär"
    },
    id: "20002013",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "chevy"
    },
    id: "20002323",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "dodge"
    },
    id: "20002326",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "rawlings"
    },
    id: "20002327",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "mustang"
    },
    id: "20002330",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "ford"
    },
    id: "20002331",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "texas"
    },
    id: "20002332",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "kaufman"
    },
    id: "20002334",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "austin"
    },
    id: "20002340",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "gas"
    },
    id: "20002342",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "cadillac"
    },
    id: "20002378",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "hoffman"
    },
    id: "20002514",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "gold"
    },
    id: "20002519",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "beets"
    },
    id: "20002520",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "klondike"
    },
    id: "20002524",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "schnabel"
    },
    id: "20002527",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "unfälle"
    },
    id: "20003686",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "morlock"
    },
    id: "20004686",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "manousakis"
    },
    id: "20004690",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "auto"
    },
    id: "20004907",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "männerarbeit"
    },
    id: "20006661",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "gold rush"
    },
    id: "20017615",
    type: "tag"
  },
  {
    attributes: {
      group: "Tags",
      name: "dashcam"
    },
    id: "20023672",
    type: "tag"
  },
  {
    attributes: {
      airDate: "2015-05-03T22:00:00Z",
      alternateId: "1965-chevrolet-impala",
      availabilityWindows: [
        {
          package: "Free",
          playableEnd: "2024-01-22T23:00:00Z",
          playableStart: "2015-05-03T22:00:00Z"
        }
      ],
      clearkeyEnabled: true,
      contentDescriptors: [],
      contentRatings: [],
      customAttributes: {},
      description:
        "Hot-Rod-Jäger Richard Rawlings hat in der Nachbarschaft einen 65er Chevrolet Impala mit Small-Block-Motor, Servolenkung und Klimaanlage entdeckt. Der Tipp kam von einem befreundeten Abschleppunternehmer. Stoßdämpfer, Boden und Schweller machen einen prima Eindruck, der Wagen scheint für sein Alter noch gut in Schuss zu sein. Wenn die Kfz-Profis einige Arbeitsstunden in den Oldie investieren und ihn ordentlich aufrüsten, könnte der Wagen beim Weiterverkauf eine hübsche Stange Geld in die Kasse spülen. ",
      drmEnabled: false,
      earliestPlayableStart: "2015-05-03T22:00:00Z",
      episodeNumber: 2,
      identifiers: {
        analyticsId: "DMAXDE_DE_DCB360470002100310001",
        epgId: "DCB360470002100",
        freewheel: "DMAXDE_DE_DCB360470002100",
        originalMediaId: "DCB360470002100"
      },
      isExpiring: false,
      isNew: false,
      name: "1965 Chevrolet Impala",
      packages: ["Free"],
      path: "fast-n-loud/1965-chevrolet-impala",
      playableTerritories: {
        mode: "deny",
        territories: []
      },
      publishEnd: "2024-01-22T23:00:00Z",
      publishStart: "2015-05-03T22:00:00Z",
      rating: "6",
      rights: {
        embeddable: true
      },
      seasonNumber: 3,
      sourceSystemId: "DMAXDE_DE_DCB360470002100",
      sourceSystemName: "IBMS",
      videoDuration: 2644715,
      videoType: "EPISODE",
      viewingHistory: {
        viewed: false
      }
    },
    id: "20035944",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000139", type: "genre" },
          { id: "20000140", type: "genre" }
        ]
      },
      images: { data: [{ id: "223037-video-20035944", type: "image" }] },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "ff8039e80ff739ff6d63fdcb49d412cbbe91db5e53b099d3f2faef24e972a5f0",
            type: "route"
          }
        ]
      },
      show: { data: { id: "20006016", type: "show" } },
      tags: {
        data: [
          { id: "20002330", type: "tag" },
          { id: "20001876", type: "tag" },
          { id: "20001046", type: "tag" },
          { id: "20002332", type: "tag" },
          { id: "20002340", type: "tag" },
          { id: "20002331", type: "tag" },
          { id: "20002342", type: "tag" },
          { id: "20002327", type: "tag" },
          { id: "20002378", type: "tag" },
          { id: "20002334", type: "tag" },
          { id: "20002323", type: "tag" },
          { id: "20002326", type: "tag" }
        ]
      }
    },
    type: "video"
  },
  {
    attributes: {
      airDate: "2013-08-01T22:00:00Z",
      alternateId: "1000-unzen",
      availabilityWindows: [
        {
          package: "Free",
          playableEnd: "2022-03-14T23:00:00Z",
          playableStart: "2015-02-24T23:00:00Z"
        }
      ],
      clearkeyEnabled: true,
      contentDescriptors: [],
      contentRatings: [],
      customAttributes: {},
      description:
        "Wochenlang sah es so aus, als wäre die ganze Plackerei umsonst gewesen. Todd Hoffman und seine Schatzsucher-Crew standen in Alaska kurz vor dem Ruin. Doch dann kamen die Männer ihrem großen Traum von Ruhm und Reichtum plötzlich ganz nah: Bis zum Wintereinbruch hatten sie Gold im Wert von über 110.000 Dollar gefunden, und nur die Eiseskälte verhinderte, dass es noch viel mehr wurde. Danach hatten die Abenteurer Blut geleckt und kehrten zurück, um sich den Rest zu holen. Mindestens 1000 Unzen Edelmetall wollten sie dieses Mal dem Erdboden abtrotzen. Hoch gesteckte Ziele in einem Land, in dem man nie weiß, was die raue Wildnis am nächsten Tag für einen bereithält.",
      drmEnabled: false,
      earliestPlayableStart: "2015-02-24T23:00:00Z",
      episodeNumber: 21,
      identifiers: {
        analyticsId: "DMAXDE_DE_DCB312880005100310001",
        epgId: "DCB312880005100",
        freewheel: "DMAXDE_DE_DCB312880005100",
        originalMediaId: "DCB312880005100"
      },
      isExpiring: false,
      isNew: false,
      name: "1000 Unzen",
      packages: ["Free"],
      path: "goldrausch-in-alaska/1000-unzen",
      playableTerritories: {
        mode: "deny",
        territories: []
      },
      publishEnd: "2022-03-14T23:00:00Z",
      publishStart: "2015-02-24T23:00:00Z",
      rating: "6",
      rights: {
        embeddable: true
      },
      seasonNumber: 3,
      sourceSystemId: "DMAXDE_DE_DCB312880005100",
      sourceSystemName: "IBMS",
      videoDuration: 2640021,
      videoType: "EPISODE",
      viewingHistory: {
        completed: false,
        lastStartedTimestamp: "2020-01-09T15:43:35Z",
        position: 0,
        viewed: true
      }
    },
    id: "20036450",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000147", type: "genre" },
          { id: "20000162", type: "genre" }
        ]
      },
      images: { data: [{ id: "226090-video-20036450", type: "image" }] },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "c65cbd4ae83e055b3fac35bcd0b79b833fd9e42d9956789cfe7a9899755b1a9b",
            type: "route"
          }
        ]
      },
      show: { data: { id: "20006018", type: "show" } },
      tags: {
        data: [
          { id: "20001075", type: "tag" },
          { id: "20001859", type: "tag" },
          { id: "20002520", type: "tag" },
          { id: "20001857", type: "tag" },
          { id: "20017615", type: "tag" },
          { id: "20002524", type: "tag" },
          { id: "20002527", type: "tag" },
          { id: "20000591", type: "tag" },
          { id: "20002519", type: "tag" },
          { id: "20001919", type: "tag" },
          { id: "20002514", type: "tag" }
        ]
      }
    },
    type: "video"
  },
  {
    attributes: {
      airDate: "2018-01-18T23:00:00Z",
      alternateId: "canopy-kings",
      availabilityWindows: [
        {
          package: "Free",
          playableEnd: "2026-06-13T22:00:00Z",
          playableStart: "2018-01-18T23:00:00Z"
        }
      ],
      clearkeyEnabled: true,
      contentDescriptors: [],
      contentRatings: [],
      customAttributes: {},
      description:
        'Klettern, Wintersport und Kajak fahren: Sarah und Burgess Carey lieben das Abenteuer. Zudem wünscht sich das Paar ein Freizeitdomizil mitten in der Natur. Und Django Kroner ist genau der richtige Mann für diesen Job. Denn der Handwerker hat drei Jahre in einem Baumhaus gelebt und kennt sich in seinem Metier bestens aus. Eine Hängebrücke, eine Freiluftdusche, eine Mini-Küche und eine großzügige Terrasse mit herrlichem Ausblick auf die Boone-Creek-Schlucht: Django und seine "Canopy Kings" zimmern ihren Kunden in dieser Doku ein Meisterwerk in den Blätterwald.',
      drmEnabled: false,
      earliestPlayableStart: "2018-01-18T23:00:00Z",
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      identifiers: {
        analyticsId: "DMAXDE_DE_DCA44708100310001",
        epgId: "DCA44708100",
        freewheel: "DMAXDE_DE_DCA44708100",
        originalMediaId: "DCA44708100"
      },
      isExpiring: false,
      isNew: false,
      name: "Canopy Kings",
      packages: ["Free"],
      path: "canopy-kings/canopy-kings",
      playableTerritories: {
        mode: "permit",
        territories: ["gg", "im", "uk", "gb", "je"]
      },
      publishEnd: "2026-06-13T22:00:00Z",
      publishStart: "2018-01-18T23:00:00Z",
      rating: "0",
      rights: {
        embeddable: true
      },
      sourceSystemId: "DMAXDE_DE_DCA44708100",
      sourceSystemName: "IBMS",
      videoDuration: 2614037,
      videoType: "STANDALONE",
      viewingHistory: {
        viewed: false
      }
    },
    id: "20039517",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000144", type: "genre" },
          { id: "20000145", type: "genre" }
        ]
      },
      images: { data: [{ id: "241955-video-20039517", type: "image" }] },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "dc1b7a908700cbb4f162b9242750ac4b87187b230e91a4f7fd7013ab142c6455",
            type: "route"
          }
        ]
      },
      show: { data: { id: "20006322", type: "show" } }
    },
    type: "video"
  },
  {
    attributes: {
      airDate: "2018-04-02T22:00:00Z",
      alternateId: "die-stubers",
      availabilityWindows: [
        {
          package: "Free",
          playableEnd: "2026-02-24T23:00:00Z",
          playableStart: "2018-04-03T20:45:00Z"
        }
      ],
      clearkeyEnabled: true,
      contentDescriptors: [],
      contentRatings: [],
      customAttributes: {},
      description:
        'Hinter anderen aufräumen ist das Geschäft der Familie Stuber. Die Haushaltsauflöser schrecken im Rhein-Neckar-Gebiet auch vor Wohnungen nicht zurück, in denen sich die Müllberge buchstäblich bis unter die Decke türmen. Zudem sind die Entrümpelungsdienstleister in der Region eine relevante Adresse in Sachen An- und Verkauf, denn Wegwerfen ist für Firmenchef Jürgen die Ultima Ratio. Seltene und kuriose Schätze, die das Mannheimer Original mit dem Instinkt eines Trüffelschweins bei der Arbeit "aufstubert", wandern nicht auf den Müll, sondern ins 10 000 Quadratmeter große Gebrauchtwarenimperium der Stubers im Hafen. Wo sie beim nächsten Lagerverkauf wieder an den Mann gebracht werden - von der Zauberer-Guillotine bis zum Hutschenreuther Porzellan.',
      drmEnabled: false,
      earliestPlayableStart: "2018-04-03T20:45:00Z",
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      identifiers: {
        analyticsId: "DMAXDE_DE_DCA45626300",
        epgId: "DCA45626300",
        freewheel: "DMAXDE_DE_DCA45626300",
        originalMediaId: "DCA45626300"
      },
      isExpiring: false,
      isNew: false,
      name: "Die Stubers",
      packages: ["Free"],
      path: "dmax-doku/die-stubers",
      playableTerritories: {
        mode: "permit",
        territories: ["gg", "im", "uk", "gb", "je"]
      },
      publishEnd: "2026-02-24T23:00:00Z",
      publishStart: "2018-04-03T20:45:00Z",
      rating: "12",
      rights: {
        embeddable: true
      },
      sourceSystemId: "DMAXDE_DE_DCA45626300",
      sourceSystemName: "IBMS",
      videoDuration: 2667029,
      videoType: "STANDALONE",
      viewingHistory: {
        viewed: false
      }
    },
    id: "20044491",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000146", type: "genre" },
          { id: "20000161", type: "genre" }
        ]
      },
      images: { data: [{ id: "267514-video-20044491", type: "image" }] },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "e5f1f0eaa8b1ecc953bd554b3e074f7b498b658445822912073fcd160ddbc3c8",
            type: "route"
          }
        ]
      },
      show: { data: { id: "20006132", type: "show" } },
      tags: {
        data: [
          { id: "20001827", type: "tag" },
          { id: "20006661", type: "tag" }
        ]
      }
    },
    type: "video"
  },
  {
    attributes: {
      alternateId: "fruehjahrsputz",
      availabilityWindows: [
        {
          package: "Free",
          playableStart: "2017-12-31T23:00:00Z"
        }
      ],
      clearkeyEnabled: true,
      contentDescriptors: [],
      contentRatings: [],
      customAttributes: {},
      description: "Wie steht Michael Manousakis zum Thema Frühjahrsputz?",
      drmEnabled: false,
      earliestPlayableStart: "2017-12-31T23:00:00Z",
      geoRestrictions: {
        countries: ["uk", "gb", "je", "gg", "im"],
        mode: "permit"
      },
      identifiers: {
        analyticsId: "DMAXDE_DE_180426145518",
        freewheel: "DMAXDE_DE_180426145518",
        originalMediaId: "180426145518"
      },
      isNew: false,
      name: "Frühjahrsputz",
      packages: ["Free"],
      path: "steel-buddies/fruehjahrsputz",
      playableTerritories: {
        mode: "permit",
        territories: ["gg", "im", "uk", "gb", "je"]
      },
      publishStart: "2017-12-31T23:00:00Z",
      rights: {
        embeddable: true
      },
      sourceSystemId: "DMAXDE_DE_180426145518",
      sourceSystemName: "VMS",
      videoDuration: 138280,
      videoType: "STANDALONE",
      viewingHistory: {
        viewed: false
      }
    },
    id: "20046611",
    relationships: {
      contentPackages: { data: [{ id: "Free", type: "package" }] },
      genres: {
        data: [
          { id: "20000161", type: "genre" },
          { id: "20000140", type: "genre" }
        ]
      },
      images: { data: [{ id: "276177-video-20046611", type: "image" }] },
      primaryChannel: { data: { id: "20000094", type: "channel" } },
      routes: {
        data: [
          {
            id:
              "89eeda3baa772978a21d8203d85307d3c1b2d637bae2d3fcaed815bf54dccc58",
            type: "route"
          }
        ]
      },
      show: { data: { id: "20006023", type: "show" } },
      tags: {
        data: [
          { id: "20002011", type: "tag" },
          { id: "20002000", type: "tag" },
          { id: "20004690", type: "tag" },
          { id: "20002009", type: "tag" },
          { id: "20001046", type: "tag" },
          { id: "20002010", type: "tag" },
          { id: "20002013", type: "tag" },
          { id: "20002002", type: "tag" },
          { id: "20004907", type: "tag" },
          { id: "20001817", type: "tag" },
          { id: "20004686", type: "tag" }
        ]
      }
    },
    type: "video"
  }
];
