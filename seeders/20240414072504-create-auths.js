"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Auths", [
      {
        email: "thereseroach@amril.com",
        userId: 1,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-12-14T03:35:21 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "tommiekim@amril.com",
        userId: 2,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-12-06T06:40:26 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "mcdowellchan@amril.com",
        userId: 3,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-12-21T08:44:34 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "carissaklein@amril.com",
        userId: 4,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-05-23T07:29:00 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "nicholserickson@amril.com",
        userId: 5,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-09-05T05:10:35 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "amytrevino@amril.com",
        userId: 6,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-03-22T11:52:37 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "roseannnorton@amril.com",
        userId: 7,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-05-02T04:21:41 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "katyvance@amril.com",
        userId: 8,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-09-08T04:14:39 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "jacobscox@amril.com",
        userId: 9,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-11-13T09:30:44 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "staciehoward@amril.com",
        userId: 10,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-08-29T05:34:20 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "parkerfischer@amril.com",
        userId: 11,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-04-23T01:14:45 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "salasdejesus@amril.com",
        userId: 12,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2024-02-29T01:55:49 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "nashpotts@amril.com",
        userId: 13,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-02-26T11:02:40 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "luzmcfarland@amril.com",
        userId: 14,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-10-14T09:43:56 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "careydickson@amril.com",
        userId: 15,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-11-10T11:50:51 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "rachellecooke@amril.com",
        userId: 16,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-12-31T04:25:55 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "nettieboyer@amril.com",
        userId: 17,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-06-18T06:11:18 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "sanfordgates@amril.com",
        userId: 18,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-10-24T01:22:20 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "taylorsloan@amril.com",
        userId: 19,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-08-01T08:55:23 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "kerrifrancis@amril.com",
        userId: 20,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-07-19T07:00:37 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "tamekaoneil@amril.com",
        userId: 21,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-05-27T06:45:08 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "oconnorarmstrong@amril.com",
        userId: 22,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-11-23T02:19:23 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "belindabrennan@amril.com",
        userId: 23,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-07-10T08:19:54 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "dionnemueller@amril.com",
        userId: 24,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-10-26T06:55:09 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "bensonbean@amril.com",
        userId: 25,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-04-15T12:54:05 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "deckerbuckner@amril.com",
        userId: 26,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-06-15T01:03:27 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "schneidergriffith@amril.com",
        userId: 27,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-10-31T06:52:52 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "shafferhansen@amril.com",
        userId: 28,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-09-03T03:17:23 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "campossellers@amril.com",
        userId: 29,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-10-17T07:07:59 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "vaughanhernandez@amril.com",
        userId: 30,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-04-29T04:30:31 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "rebekahmeyer@amril.com",
        userId: 31,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-05-20T08:32:04 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "joglenn@amril.com",
        userId: 32,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-01-06T10:40:17 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "fultonduncan@amril.com",
        userId: 33,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-04-09T12:44:51 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "oneallott@amril.com",
        userId: 34,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-07-25T07:20:00 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "wigginsmcconnell@amril.com",
        userId: 35,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-12-18T06:30:18 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "georgialeach@amril.com",
        userId: 36,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-12-03T09:14:08 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "jamibeard@amril.com",
        userId: 37,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-05-18T06:41:04 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "aprilmiles@amril.com",
        userId: 38,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-07-25T09:12:43 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "mayraprince@amril.com",
        userId: 39,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-02-27T12:54:51 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "pricebaker@amril.com",
        userId: 40,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2024-03-09T05:56:47 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "stacynewman@amril.com",
        userId: 41,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-01-27T12:38:32 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "mcbridepace@amril.com",
        userId: 42,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-08-29T06:13:45 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "braymcmahon@amril.com",
        userId: 43,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-09-04T07:05:38 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "richmondcarter@amril.com",
        userId: 44,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-10-28T11:26:36 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "hayesgarner@amril.com",
        userId: 45,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-11-05T11:58:14 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "cantrellreilly@amril.com",
        userId: 46,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2021-06-04T07:34:46 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "everettwiley@amril.com",
        userId: 47,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-01-07T05:04:01 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "jennifermalone@amril.com",
        userId: 48,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2023-01-15T04:13:08 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "theresamedina@amril.com",
        userId: 49,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2020-09-30T04:14:38 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "underwoodoliver@amril.com",
        userId: 50,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-05-10T09:53:24 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
      {
        email: "imam123@mail.com",
        userId: 51,
        password:
          "$2a$12$H4EOLASaZ2kiS3qL1Uxt0OuWb97o3tvnECkAxwI2a8B.irErsj8VS",
        createdAt: "2022-05-10T09:53:24 -07:00",
        updatedAt: "2024-04-14T02:34:24 -07:00",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
