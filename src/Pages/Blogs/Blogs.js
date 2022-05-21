import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='bg-primary text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                    What are the difference between Javascript and Node.js?
                </h2>
                <p>
                    - Javascript is a programming language that is used for writing scripts on the website. It can only be run in the browsers. It is used in the client-side, so we can say It is used in front-end development. It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.

                    - Node.js is a Javascript runtime environment. Javascript can be run outside the browser with the help of Node.js and Node.js is basically used in server side. So we can say that, Node.js is used in server-side development. Nodejs is written in C, C++ and Javascript.
                </p>
            </div>
            <div className='bg-success text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                    When should we use Node.js and when should we use MongoDB?
                </h2>
                <p>
                    - Node.js is a Javascript engine that runs our Javascript code. It is used to build servers that can respond to web requests, though it can be used for lots of other types of code too. When we want to write some kind of stand-alone program or server in Javascript, then we can use Node.js for it.

                    - MongoDB is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with Node.js that use MongoDB for storing data. If our application needs the ability to persistently store data, create databases, and also add, query, update or delete data in a way from the database, then we can use MongoDB database.
                </p>
            </div>
            <div className='bg-danger text-white border rounded p-4 w-75 mx-auto m-5'>
                <h2>
                    What are the difference between SQL and No-SQL database?
                </h2>
                <p>
                    - Structured Query Language (SQL) is a relational database management system. These databases are not suited for hierarchical data storage, these are suited for complex queries. These databases are vertically scalable and follow ACID (Atomicity, Consistency, Isolation and Durability) property.

                    - Non-structured Query Language (No-SQL) is a non-relational or distributed database system. These databases are best suited for hierarchical data storage, these are not suited for complex queries. These databases are horizontally scalable and follow CAP (Consistency, Availability, Partition tolerance) property.
                </p>
            </div>
        </div>
    );
};

export default Blogs;