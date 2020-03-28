export const collection = {
  attributes: {
    alias: "tv-latest-videos",
    component: { id: "content-grid", templateId: "basic" },
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
};

export const collectionItem = {
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
};
