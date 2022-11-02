import React, { useState } from "react";
import { getRestaurantList, GetRestaurantListParams } from "../api/restaurants/requests";
import { Restaurant } from "../api/restaurants/restaurants.types";
import { getDate } from "../components/helpers/helpers";

export const useRestaurantList = () => {
  const warsawCoordinates = [52.22977, 21.01178];
  const [restaurants, setRestaurants] = useState<Restaurant[] | []>([]);
  const [cityCenterPosition, setCityCenterPosition] = useState(
    warsawCoordinates
  );
  const [icon, setIcon] = useState("");
  const fetchRestaurantList = (id: string[], city = "Warsaw") => {
    const params: GetRestaurantListParams = {
      client_id: "IEV0NGQ2WLUULDQ1TA0OD1UPUKZG0VTO3MYIKDN2MYHIKJ1E",
      client_secret: "SVPZ5HDAZK0JUFDNNVQBAWODV0FNG25YGM1EL5MB4SCSKRWD",
      near: city,
      categoryId: id,
      limit: 100,
      v: getDate(),
    };

    getRestaurantList(params).then((res) => {
      if (res) {
        setCityCenterPosition(res.cityCenterPosition);
        setRestaurants(res.restaurantsList);
        setIcon(res.icon);
      } else {
        alert("Write a correct city name");
      }
    });
  };

  return {
    fetchRestaurantList,
    restaurants,
    cityCenterPosition,
    icon,
  };
};


export interface GetSelectedRestaurantDto {

}


// {
// 	"meta": {
// 		"code": 200,
// 		"requestId": "6360e0f91bad722936e88249"
// 	},
// 	"response": {
// 		"venue": {
// 			"id": "4c9b815878ffa09377af7575",
// 			"name": "Bierhalle",
// 			"contact": {
// 				"phone": "+48609677765",
// 				"formattedPhone": "+48 609 677 765"
// 			},
// 			"location": {
// 				"address": "Nowy Świat 62",
// 				"crossStreet": "at Świętokrzyska",
// 				"lat": 52.23614896401162,
// 				"lng": 21.01823873639942,
// 				"labeledLatLngs": [
// 					{
// 						"label": "display",
// 						"lat": 52.23614896401162,
// 						"lng": 21.01823873639942
// 					}
// 				],
// 				"cc": "PL",
// 				"neighborhood": "Śródmieście Północne",
// 				"city": "Warszawa",
// 				"state": "Województwo mazowieckie",
// 				"country": "Polska",
// 				"formattedAddress": [
// 					"Nowy Świat 62 (at Świętokrzyska)",
// 					"Warszawa",
// 					"Polska"
// 				]
// 			},
// 			"canonicalUrl": "https://foursquare.com/v/bierhalle/4c9b815878ffa09377af7575",
// 			"categories": [
// 				{
// 					"id": "4bf58dd8d48988d117941735",
// 					"name": "Beer Garden",
// 					"pluralName": "Beer Gardens",
// 					"shortName": "Beer Garden",
// 					"icon": {
// 						"prefix": "https://ss3.4sqi.net/img/categories_v2/nightlife/beergarden_",
// 						"suffix": ".png"
// 					},
// 					"primary": true
// 				},
// 				{
// 					"id": "4bf58dd8d48988d10d941735",
// 					"name": "German Restaurant",
// 					"pluralName": "German Restaurants",
// 					"shortName": "German",
// 					"icon": {
// 						"prefix": "https://ss3.4sqi.net/img/categories_v2/food/german_",
// 						"suffix": ".png"
// 					}
// 				}
// 			],
// 			"verified": false,
// 			"stats": {
// 				"tipCount": 36
// 			},
// 			"url": "http://www.bierhalle.pl/kontakt/warszawa-marszalkowska-55",
// 			"price": {
// 				"tier": 1,
// 				"message": "Cheap",
// 				"currency": "$"
// 			},
// 			"likes": {
// 				"count": 108,
// 				"groups": [
// 					{
// 						"type": "others",
// 						"count": 108,
// 						"items": []
// 					}
// 				],
// 				"summary": "108 Likes"
// 			},
// 			"dislike": false,
// 			"ok": false,
// 			"rating": 5.9,
// 			"ratingColor": "FF9600",
// 			"ratingSignals": 185,
// 			"allowMenuUrlEdit": true,
// 			"beenHere": {
// 				"count": 0,
// 				"unconfirmedCount": 0,
// 				"marked": false,
// 				"lastCheckinExpiredAt": 0
// 			},
// 			"photos": {
// 				"count": 203,
// 				"groups": [
// 					{
// 						"type": "venue",
// 						"name": "Venue photos",
// 						"count": 203,
// 						"items": [
// 							{
// 								"id": "4fd7c421e4b0ff9bcb01f0da",
// 								"createdAt": 1339540513,
// 								"source": {
// 									"name": "Foursquare for iOS",
// 									"url": "https://foursquare.com/download/#/iphone"
// 								},
// 								"prefix": "https://fastly.4sqi.net/img/general/",
// 								"suffix": "/JJmqfnRCNKwtCMI8AsVnTGcOon4YyK8a8iadmi3ZojQ.jpg",
// 								"width": 720,
// 								"height": 540,
// 								"visibility": "public"
// 							},
// 							{
// 								"id": "5252b9e411d2b0789e803221",
// 								"createdAt": 1381153252,
// 								"source": {
// 									"name": "Instagram",
// 									"url": "http://instagram.com"
// 								},
// 								"prefix": "https://fastly.4sqi.net/img/general/",
// 								"suffix": "/27021225_-FO-zxnVDZ7Vyb08PgVEF7shBi5Kl55zQHGP1qHIXhE.jpg",
// 								"width": 640,
// 								"height": 640,
// 								"visibility": "public"
// 							},
// 							{
// 								"id": "4fddbb3be4b01dfebfefc55c",
// 								"createdAt": 1339931451,
// 								"source": {
// 									"name": "Foursquare for Android",
// 									"url": "https://foursquare.com/download/#/android"
// 								},
// 								"prefix": "https://fastly.4sqi.net/img/general/",
// 								"suffix": "/5soJfINJRg8pa-laTflPxEbSi94g9A03P2t42BIdn2Q.jpg",
// 								"width": 720,
// 								"height": 540,
// 								"visibility": "public"
// 							},
// 							{
// 								"id": "4fabbd72e4b07960eb2db83a",
// 								"createdAt": 1336655218,
// 								"source": {
// 									"name": "Foursquare for iOS",
// 									"url": "https://foursquare.com/download/#/iphone"
// 								},
// 								"prefix": "https://fastly.4sqi.net/img/general/",
// 								"suffix": "/ENkhJIZTaFs20JU8WQ65btlUHSje2yM6PMkPgXGtZao.jpg",
// 								"width": 540,
// 								"height": 540,
// 								"visibility": "public"
// 							}
// 						]
// 					}
// 				]
// 			},
// 			"reasons": {
// 				"count": 1,
// 				"items": [
// 					{
// 						"summary": "Lots of people like this place",
// 						"type": "general",
// 						"reasonName": "rawLikesReason"
// 					}
// 				]
// 			},
// 			"hereNow": {
// 				"count": 0,
// 				"summary": "Nobody here",
// 				"groups": []
// 			},
// 			"createdAt": 1285259608,
// 			"tips": {
// 				"count": 36,
// 				"groups": [
// 					{
// 						"type": "others",
// 						"name": "All tips",
// 						"count": 36,
// 						"items": [
// 							{
// 								"id": "4eefa0f00aaf1d45b4635ed4",
// 								"createdAt": 1324327152,
// 								"text": "WiFi pass bierhalle.",
// 								"type": "user",
// 								"canonicalUrl": "https://foursquare.com/item/4eefa0f00aaf1d45b4635ed4",
// 								"lang": "en",
// 								"likes": {
// 									"count": 5,
// 									"groups": [
// 										{
// 											"type": "others",
// 											"count": 5,
// 											"items": [
// 												{
// 													"firstName": "Andrey",
// 													"lastName": "L",
// 													"countryCode": "PL"
// 												},
// 												{
// 													"firstName": "Filip",
// 													"lastName": "S",
// 													"countryCode": "CZ"
// 												},
// 												{
// 													"firstName": "Bogdan",
// 													"lastName": "P",
// 													"countryCode": "RO"
// 												}
// 											]
// 										}
// 									],
// 									"summary": "5 likes"
// 								},
// 								"logView": true,
// 								"agreeCount": 3,
// 								"disagreeCount": 0,
// 								"todo": {
// 									"count": 0
// 								},
// 								"user": {
// 									"firstName": "Араик",
// 									"lastName": "А",
// 									"address": "",
// 									"city": "",
// 									"state": "",
// 									"countryCode": "QA"
// 								}
// 							},
// 							{
// 								"id": "5188b934498e33fb7e64993c",
// 								"createdAt": 1367914804,
// 								"text": "Стилизованный пивной ресторан. Вкуснейшие блюда национальной кухни и свежее фирменное пиво.",
// 								"type": "user",
// 								"canonicalUrl": "https://foursquare.com/item/5188b934498e33fb7e64993c",
// 								"lang": "ru",
// 								"likes": {
// 									"count": 3,
// 									"groups": [
// 										{
// 											"type": "others",
// 											"count": 3,
// 											"items": [
// 												{
// 													"firstName": "Ksu",
// 													"lastName": "R",
// 													"countryCode": "BY"
// 												},
// 												{
// 													"firstName": "FlipGirl",
// 													"lastName": "B",
// 													"countryCode": "RU"
// 												},
// 												{
// 													"firstName": "Mariya",
// 													"lastName": "B",
// 													"countryCode": "RU"
// 												}
// 											]
// 										}
// 									],
// 									"summary": "3 likes"
// 								},
// 								"logView": true,
// 								"agreeCount": 3,
// 								"disagreeCount": 0,
// 								"todo": {
// 									"count": 0
// 								},
// 								"user": {
// 									"firstName": "easyvibes.ru",
// 									"countryCode": "BY",
// 									"type": "page"
// 								}
// 							},
// 							{
// 								"id": "509e5f0de4b076197bf5eb9e",
// 								"createdAt": 1352556301,
// 								"text": "Bardzo smaczne pszeniczne niepasteryzowane! Polecam!",
// 								"type": "user",
// 								"canonicalUrl": "https://foursquare.com/item/509e5f0de4b076197bf5eb9e",
// 								"lang": "pl",
// 								"likes": {
// 									"count": 2,
// 									"groups": [
// 										{
// 											"type": "others",
// 											"count": 2,
// 											"items": [
// 												{
// 													"firstName": "lemon_fizz",
// 													"countryCode": "PL"
// 												}
// 											]
// 										}
// 									],
// 									"summary": "2 likes"
// 								},
// 								"logView": true,
// 								"agreeCount": 1,
// 								"disagreeCount": 0,
// 								"todo": {
// 									"count": 0
// 								},
// 								"user": {
// 									"firstName": "Victoria",
// 									"lastName": "T",
// 									"countryCode": "UA"
// 								}
// 							},
// 							{
// 								"id": "55b94bb8498e341bc5152e31",
// 								"createdAt": 1438206904,
// 								"text": "Have a beer here! Sit outside...",
// 								"type": "user",
// 								"canonicalUrl": "https://foursquare.com/item/55b94bb8498e341bc5152e31",
// 								"photo": {
// 									"id": "55b94bca498e59e091f6ae33",
// 									"createdAt": 1438206922,
// 									"source": {
// 										"name": "Foursquare for iOS",
// 										"url": "https://foursquare.com/download/#/iphone"
// 									},
// 									"prefix": "https://fastly.4sqi.net/img/general/",
// 									"suffix": "/93287879_c6FEOXv5PNLOBFeM2WHjGUqlY9nCXaTq9K7cnp_o32s.jpg",
// 									"width": 1920,
// 									"height": 1440,
// 									"visibility": "public"
// 								},
// 								"photourl": "https://fastly.4sqi.net/img/general/original/93287879_c6FEOXv5PNLOBFeM2WHjGUqlY9nCXaTq9K7cnp_o32s.jpg",
// 								"lang": "en",
// 								"likes": {
// 									"count": 1,
// 									"groups": [
// 										{
// 											"type": "others",
// 											"count": 1,
// 											"items": [
// 												{
// 													"firstName": "Chrysostomos",
// 													"lastName": "L",
// 													"countryCode": "GR"
// 												}
// 											]
// 										}
// 									],
// 									"summary": "1 like"
// 								},
// 								"logView": true,
// 								"agreeCount": 1,
// 								"disagreeCount": 0,
// 								"todo": {
// 									"count": 0
// 								},
// 								"user": {
// 									"firstName": "Chrysostomos",
// 									"lastName": "L",
// 									"countryCode": "GR"
// 								}
// 							}
// 						]
// 					}
// 				]
// 			},
// 			"shortUrl": "http://4sq.com/bYufzI",
// 			"timeZone": "Europe/Warsaw",
// 			"listed": {
// 				"count": 29,
// 				"groups": [
// 					{
// 						"type": "others",
// 						"name": "Lists from other people",
// 						"count": 29,
// 						"items": [
// 							{
// 								"id": "518516ef498e1d5b50bb3bc0",
// 								"name": "Варшава - онлайн путеводитель",
// 								"description": "Город с глубокими европейскими традициями и, в то же время, советским прошлым. Варшава привлекает своим разнообразием достопримечательностей, дешевизной и относительной близостью.",
// 								"type": "others",
// 								"user": {
// 									"firstName": "easyvibes.ru",
// 									"countryCode": "BY",
// 									"type": "page"
// 								},
// 								"editable": false,
// 								"public": true,
// 								"collaborative": false,
// 								"url": "/p/easyvibesru/55267927/list/%D0%B2%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0--%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C",
// 								"canonicalUrl": "https://foursquare.com/p/easyvibesru/55267927/list/%D0%B2%D0%B0%D1%80%D1%88%D0%B0%D0%B2%D0%B0--%D0%BE%D0%BD%D0%BB%D0%B0%D0%B9%D0%BD-%D0%BF%D1%83%D1%82%D0%B5%D0%B2%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C",
// 								"createdAt": 1367676655,
// 								"updatedAt": 1392160602,
// 								"photo": {
// 									"id": "51a5e049abd8c76574170e51",
// 									"createdAt": 1369825353,
// 									"prefix": "https://fastly.4sqi.net/img/general/",
// 									"suffix": "/55267927_QaEKN7LfVof13qzaqz9kXdYAIIvGDk6NiT2P57AIsbk.jpg",
// 									"width": 860,
// 									"height": 576,
// 									"visibility": "public"
// 								},
// 								"logView": true,
// 								"followers": {
// 									"count": 58
// 								},
// 								"listItems": {
// 									"count": 26,
// 									"items": [
// 										{
// 											"id": "t5188b934498e33fb7e64993c",
// 											"createdAt": 1367677263
// 										}
// 									]
// 								}
// 							},
// 							{
// 								"id": "5185472f498e0b2632dc59c5",
// 								"name": "Restauracje",
// 								"description": "",
// 								"type": "others",
// 								"user": {
// 									"firstName": "Piotr",
// 									"lastName": "O",
// 									"countryCode": "PL"
// 								},
// 								"editable": false,
// 								"public": true,
// 								"collaborative": false,
// 								"url": "/user/55259451/list/restauracje",
// 								"canonicalUrl": "https://foursquare.com/user/55259451/list/restauracje",
// 								"createdAt": 1367689007,
// 								"updatedAt": 1402169675,
// 								"followers": {
// 									"count": 1
// 								},
// 								"listItems": {
// 									"count": 36,
// 									"items": [
// 										{
// 											"id": "v4c9b815878ffa09377af7575",
// 											"createdAt": 1367773471
// 										}
// 									]
// 								}
// 							},
// 							{
// 								"id": "4fdf48cae4b01dfec08ac62c",
// 								"name": "StorefrontSticker #4sqCities: Warsaw",
// 								"description": "",
// 								"type": "others",
// 								"user": {
// 									"firstName": "StorefrontSticker",
// 									"countryCode": "DE",
// 									"type": "page"
// 								},
// 								"editable": false,
// 								"public": true,
// 								"collaborative": false,
// 								"url": "/storefrontstick/list/storefrontsticker-4sqcities-warsaw",
// 								"canonicalUrl": "https://foursquare.com/storefrontstick/list/storefrontsticker-4sqcities-warsaw",
// 								"createdAt": 1340033226,
// 								"updatedAt": 1647088121,
// 								"photo": {
// 									"id": "4f9a6cf1e4b0ad3854513900",
// 									"createdAt": 1335520497,
// 									"prefix": "https://fastly.4sqi.net/img/general/",
// 									"suffix": "/j8pdrrC50ONeSrAjr1Xc4Q_svJl-vh0ROnaFg7aivwI.jpg",
// 									"width": 540,
// 									"height": 720,
// 									"visibility": "public"
// 								},
// 								"logView": true,
// 								"followers": {
// 									"count": 17
// 								},
// 								"listItems": {
// 									"count": 85,
// 									"items": [
// 										{
// 											"id": "v4c9b815878ffa09377af7575",
// 											"createdAt": 1340040358,
// 											"photo": {
// 												"id": "4fd22c6de4b08f355cc9f81d",
// 												"createdAt": 1339173997,
// 												"prefix": "https://fastly.4sqi.net/img/general/",
// 												"suffix": "/GPTIPzVr_nmbbrwI7YG7zJWiykaLXmt11b4h_wmiD6Q.jpg",
// 												"width": 720,
// 												"height": 540,
// 												"visibility": "public"
// 											}
// 										}
// 									]
// 								}
// 							},
// 							{
// 								"id": "52f61b46498e0e47fd0f2e40",
// 								"name": "Warsaw toVisit",
// 								"description": "",
// 								"type": "others",
// 								"user": {
// 									"firstName": "Andrii",
// 									"lastName": "K",
// 									"countryCode": "UA"
// 								},
// 								"editable": false,
// 								"public": true,
// 								"collaborative": false,
// 								"url": "/tieorangeandriy/list/warsaw-tovisit",
// 								"canonicalUrl": "https://foursquare.com/tieorangeandriy/list/warsaw-tovisit",
// 								"createdAt": 1391860550,
// 								"updatedAt": 1636437584,
// 								"photo": {
// 									"id": "512a43cee4b0173cfb9a8b01",
// 									"createdAt": 1361724366,
// 									"prefix": "https://fastly.4sqi.net/img/general/",
// 									"suffix": "/29605054_xHuExoXmd5px5GY1eEsbA55jcp_uF9BQMqsJudKuJzo.jpg",
// 									"width": 720,
// 									"height": 720,
// 									"visibility": "public"
// 								},
// 								"followers": {
// 									"count": 1
// 								},
// 								"listItems": {
// 									"count": 22,
// 									"items": [
// 										{
// 											"id": "v4c9b815878ffa09377af7575",
// 											"createdAt": 1391860644
// 										}
// 									]
// 								}
// 							}
// 						]
// 					}
// 				]
// 			},
// 			"phrases": [
// 				{
// 					"phrase": "piwo",
// 					"sample": {
// 						"entities": [
// 							{
// 								"indices": [
// 									24,
// 									28
// 								],
// 								"type": "keyPhrase"
// 							}
// 						],
// 						"text": "... jedzenie smaczne, a piwo super. Polecam Marcowe. Dla mnie idealny..."
// 					},
// 					"count": 5
// 				},
// 				{
// 					"phrase": "marcowe",
// 					"sample": {
// 						"entities": [
// 							{
// 								"indices": [
// 									26,
// 									33
// 								],
// 								"type": "keyPhrase"
// 							}
// 						],
// 						"text": "... a piwo super. Polecam Marcowe. Dla mnie idealny smak. Fajny klimat. Wroce..."
// 					},
// 					"count": 2
// 				},
// 				{
// 					"phrase": "pszeniczne",
// 					"sample": {
// 						"entities": [
// 							{
// 								"indices": [
// 									25,
// 									35
// 								],
// 								"type": "keyPhrase"
// 							}
// 						],
// 						"text": "... z indyka dobra, piwo pszeniczne pyszne,puree zimne i buraczki..."
// 					},
// 					"count": 2
// 				}
// 			],
// 			"popular": {
// 				"isOpen": false,
// 				"isLocalHoliday": false,
// 				"timeframes": [
// 					{
// 						"days": "Today",
// 						"includesToday": true,
// 						"open": [
// 							{
// 								"renderedTime": "1:00 PM–2:00 PM"
// 							},
// 							{
// 								"renderedTime": "4:00 PM–11:00 PM"
// 							}
// 						],
// 						"segments": []
// 					},
// 					{
// 						"days": "Wed",
// 						"open": [
// 							{
// 								"renderedTime": "4:00 PM–11:00 PM"
// 							}
// 						],
// 						"segments": []
// 					},
// 					{
// 						"days": "Thu",
// 						"open": [
// 							{
// 								"renderedTime": "2:00 PM–11:00 PM"
// 							}
// 						],
// 						"segments": []
// 					},
// 					{
// 						"days": "Fri–Sat",
// 						"open": [
// 							{
// 								"renderedTime": "1:00 PM–Midnight"
// 							}
// 						],
// 						"segments": []
// 					},
// 					{
// 						"days": "Sun",
// 						"open": [
// 							{
// 								"renderedTime": "3:00 PM–10:00 PM"
// 							}
// 						],
// 						"segments": []
// 					},
// 					{
// 						"days": "Mon",
// 						"open": [
// 							{
// 								"renderedTime": "2:00 PM–3:00 PM"
// 							},
// 							{
// 								"renderedTime": "5:00 PM–11:00 PM"
// 							}
// 						],
// 						"segments": []
// 					}
// 				]
// 			},
// 			"seasonalHours": [],
// 			"pageUpdates": {
// 				"count": 0,
// 				"items": []
// 			},
// 			"inbox": {
// 				"count": 0,
// 				"items": []
// 			},
// 			"attributes": {
// 				"groups": [
// 					{
// 						"type": "price",
// 						"name": "Price",
// 						"summary": "$",
// 						"count": 1,
// 						"items": [
// 							{
// 								"displayName": "Price",
// 								"displayValue": "$",
// 								"priceTier": 1
// 							}
// 						]
// 					},
// 					{
// 						"type": "reservations",
// 						"name": "Reservations",
// 						"summary": "Reservations",
// 						"count": 3,
// 						"items": [
// 							{
// 								"displayName": "Reservations",
// 								"displayValue": "Yes"
// 							}
// 						]
// 					},
// 					{
// 						"type": "payments",
// 						"name": "Credit Cards",
// 						"summary": "Credit Cards",
// 						"count": 5,
// 						"items": [
// 							{
// 								"displayName": "Credit Cards",
// 								"displayValue": "Yes"
// 							}
// 						]
// 					},
// 					{
// 						"type": "outdoorSeating",
// 						"name": "Outdoor Seating",
// 						"summary": "Outdoor Seating",
// 						"count": 1,
// 						"items": [
// 							{
// 								"displayName": "Outdoor Seating",
// 								"displayValue": "Yes"
// 							}
// 						]
// 					},
// 					{
// 						"type": "wifi",
// 						"name": "Wi-Fi",
// 						"summary": "Wi-Fi",
// 						"count": 1,
// 						"items": [
// 							{
// 								"displayName": "Wi-Fi",
// 								"displayValue": "Yes"
// 							}
// 						]
// 					},
// 					{
// 						"type": "serves",
// 						"name": "Menus",
// 						"summary": "Brunch & Happy Hour",
// 						"count": 8,
// 						"items": [
// 							{
// 								"displayName": "Brunch",
// 								"displayValue": "Brunch"
// 							},
// 							{
// 								"displayName": "Happy Hour",
// 								"displayValue": "Happy Hour"
// 							}
// 						]
// 					},
// 					{
// 						"type": "drinks",
// 						"name": "Drinks",
// 						"summary": "Beer & Cocktails",
// 						"count": 5,
// 						"items": [
// 							{
// 								"displayName": "Beer",
// 								"displayValue": "Beer"
// 							},
// 							{
// 								"displayName": "Cocktails",
// 								"displayValue": "Cocktails"
// 							}
// 						]
// 					}
// 				]
// 			},
// 			"bestPhoto": {
// 				"id": "4fd7c421e4b0ff9bcb01f0da",
// 				"createdAt": 1339540513,
// 				"source": {
// 					"name": "Foursquare for iOS",
// 					"url": "https://foursquare.com/download/#/iphone"
// 				},
// 				"prefix": "https://fastly.4sqi.net/img/general/",
// 				"suffix": "/JJmqfnRCNKwtCMI8AsVnTGcOon4YyK8a8iadmi3ZojQ.jpg",
// 				"width": 720,
// 				"height": 540,
// 				"visibility": "public"
// 			},
// 			"colors": {
// 				"highlightColor": {
// 					"photoId": "4fd7c421e4b0ff9bcb01f0da",
// 					"value": -12576768
// 				},
// 				"highlightTextColor": {
// 					"photoId": "4fd7c421e4b0ff9bcb01f0da",
// 					"value": -1
// 				},
// 				"algoVersion": 3
// 			}
// 		}
// 	}
// }