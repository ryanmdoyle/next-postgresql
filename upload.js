const db = require('./db/index');
const sql = require('sql-template-strings');

const table = sql`
  CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    address varchar(40),
    avatar varchar(100),
    email varchar(100),
    name varchar(100)
  )
`;

const profiles = sql`
INSERT INTO profiles (id, address, avatar, email, name) VALUES
    ('1', '9 Cherokee Park', 'https://robohash.org/estoditpraesentium.png?size=100x100&set=set1', 'mworts0@blog.com', 'Marlowe Worts'),
    ('2', '6080 Scofield Place', 'https://robohash.org/sedquamomnis.png?size=100x100&set=set1', 'amatitiaho1@msn.com', 'Aurthur Matitiaho'),
    ('3', '79 American Ash Pass', 'https://robohash.org/necessitatibusautmaiores.png?size=100x100&set=set1', 'ctomik2@java.com', 'Cristine Tomik'),
    ('4', '59 Nobel Drive', 'https://robohash.org/dolorconsequunturanimi.png?size=100x100&set=set1', 'lkorba3@infoseek.co.jp', 'Leigh Korba'),
    ('5', '8305 Sauthoff Circle', 'https://robohash.org/eumestbeatae.png?size=100x100&set=set1', 'gcrathern4@admin.ch', 'Gonzales Crathern'),
    ('6', '55 Novick Drive', 'https://robohash.org/dolorquidemaut.png?size=100x100&set=set1', 'aranger5@who.int', 'Albert Ranger'),
    ('7', '4939 Paget Park', 'https://robohash.org/dolorseddignissimos.png?size=100x100&set=set1', 'mskillern6@360.cn', 'Merline Skillern'),
    ('8', '2112 Sullivan Street', 'https://robohash.org/atremprovident.png?size=100x100&set=set1', 'neadmeads7@csmonitor.com', 'Norine Eadmeads'),
    ('9', '2792 Hayes Avenue', 'https://robohash.org/optioconsequaturquis.png?size=100x100&set=set1', 'cwilber8@slideshare.net', 'Clarette Wilber'),
    ('10', '7240 Meadow Vale Trail', 'https://robohash.org/aperiamdelenitiillo.png?size=100x100&set=set1', 'bharkus9@delicious.com', 'Braden Harkus'),
    ('11', '72310 Old Gate Court', 'https://robohash.org/quaeitaquequasi.png?size=100x100&set=set1', 'gcowterda@opera.com', 'Gael Cowterd'),
    ('12', '8 Sugar Court', 'https://robohash.org/etvoluptatumlabore.png?size=100x100&set=set1', 'sthowlessb@marketwatch.com', 'Shelton Thowless'),
    ('13', '3 John Wall Terrace', 'https://robohash.org/quivelitaut.png?size=100x100&set=set1', 'kpaitonc@ihg.com', 'Karoly Paiton'),
    ('14', '768 Farmco Parkway', 'https://robohash.org/autmolestiaspariatur.png?size=100x100&set=set1', 'poverild@google.com.br', 'Petra Overil'),
    ('15', '47629 Dovetail Center', 'https://robohash.org/laborumnihilrepellat.png?size=100x100&set=set1', 'adubarrye@163.com', 'Angel Dubarry'),
    ('16', '7 Northview Court', 'https://robohash.org/sedquosearum.png?size=100x100&set=set1', 'jsmeathf@salon.com', 'Jeni Smeath'),
    ('17', '532 Buhler Trail', 'https://robohash.org/officiisipsumet.png?size=100x100&set=set1', 'ddeliong@wp.com', 'Dannel Delion');
`;

// db.query('DROP TABLE profiles');
//db.query(table);
db.query(profiles);

// async function makeProfiles(tableName, table, profiles) {
//   await db.query(`DROP TABLE ${tableName}`);
//   await db.query(table);
//   await db.query(profiles);
//   console.log("complete!");
// }

// makeProfiles('profiles', table, profiles);