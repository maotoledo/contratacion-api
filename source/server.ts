import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/posts';

const router: Express = express();

/** Logging */
router.use(morgan('dev'));
/** Parse the request */
router.use(express.urlencoded({ extended: false }));
/** Takes care of JSON data */
router.use(express.json());

/** RULES OF OUR API */
router.use((req, res, next) => {
    // set the CORS policy
    res.header('Access-Control-Allow-Origin', '*');
    // set the CORS headers
    res.header('Access-Control-Allow-Headers', 'origin, X-Requested-With,Content-Type,Accept, Authorization');
    // set the CORS method headers
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST');
        return res.status(200).json({});
    }
    next();
});

/** Routes */
router.use('/', routes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('not found');
    return res.status(404).json({
        message: error.message
    });
});

/** Server */
const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 6060;
httpServer.listen(PORT, () => console.log(`The server is running on port ${PORT}`));

const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'aseguradora',
    'admin',
    'AdM!n$uPo0rT.2022',
    {
        host: 'aseguradora.cbrvpgzwo1jx.us-east-2.rds.amazonaws.com',
        dialect: 'mysql'
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error: Error) => {
    console.error('Unable to connect to the database: ', error);
});

// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');

//     Book.create({
//         title: "Clean Code",
//         author: "Robert Cecil Martin",
//         release_date: "2021-12-14",
//         subject: 3
//     }).then((res: Response) => {
//         console.log(res)
//     }).catch((error: Error) => {
//         console.error('Failed to create a new record : ', error);
//     });

// }).catch((error: Error) => {
//     console.error('Unable to create table : ', error);
// });


// const Book = sequelize.define("books", {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     author: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     release_date: {
//         type: DataTypes.DATEONLY,
//     },
//     subject: {
//         type: DataTypes.INTEGER,
//     }
// });

// sequelize.sync().then(() => {
//     console.log('Book table created successfully!');
// }).catch((error: Error) => {
//     console.error('Unable to create table : ', error);
// });

// sequelize.sync().then(() => {

//     Book.findAll().then((res: Response) => {
//         console.log(res)
//     }).catch((error: Error) => {
//         console.error('Failed to retrieve data : ', error);
//     });

// }).catch((error:Error) => {
//     console.error('Unable to create table : ', error);
// });


// sequelize.sync().then(() => {

//     Book.findOne({
//         where: {
//             id : "1"
//         }
//     }).then((res: Response) => {
//         console.log(res)
//     }).catch((error: Error) => {
//         console.error('Failed to retrieve data : ', error);
//     });

// }).catch((error: Error) => {
//     console.error('Unable to create table : ', error);
// });

// sequelize.sync().then(() => {

//     Book.destroy({
//         where: {
//           id: 2
//         }
//     }).then(() => {
//         console.log("Successfully deleted record.")
//     }).catch((error: Error) => {
//         console.error('Failed to delete record : ', error);
//     });
  
//   }).catch((error: Error) => {
//       console.error('Unable to create table : ', error);
//   });

const VehiculoCliente = sequelize.define("tbl_vehiculo_cliente", {
    id_vehiculo: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    id_cliente: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_marca: {
        type: DataTypes.INTEGER,
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

sequelize.sync().then(() => {

    VehiculoCliente.findAll().then((res: Response) => {
        console.log(res)
    }).catch((error: Error) => {
        console.error('Failed to retrieve data : ', error);
    });

}).catch((error:Error) => {
    console.error('Unable to create table : ', error);
});