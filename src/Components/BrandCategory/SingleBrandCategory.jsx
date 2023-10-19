/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const SingleBrandCategory = ({data}) => {
    const{image,category} =data
    const lodedData = useLoaderData()



    return (
        <Link to={`/products/${category}`} className="relative rounded overflow-hidden">
        <img src={image} alt="Metal Planters" className="w-full"/>
        <p
          className="cursor-pointer absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center text-2xl text-center text-white font-roboto font-medium group-hover:bg-opacity-60 transition">
          {category}
        </p>
      </Link>
    );
};

export default SingleBrandCategory;