import React from "react";

const userProfilePage = ({username}) => {
  return <div>{username}</div>;
};

export default userProfilePage;

export async function getServerSideProps(context) {
    const { params, req, res } = context;
    console.log(" Server side code ");
    return {
        props:{
            username: "Max"
        } ,
    };
}