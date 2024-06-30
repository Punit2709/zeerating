import { MdHomeFilled } from "react-icons/md";
import { PiTelevisionFill } from "react-icons/pi";
import { BiSolidMoviePlay } from "react-icons/bi";
import { IoSearchOutline } from "react-icons/io5";
import React from "react";

export const navigation = [
    {
        label: "TV Shows",
        href: 'tv',
        icon: React.createElement(PiTelevisionFill)
    },
    {
        label: "Movies",
        href: "movie",
        icon: React.createElement(BiSolidMoviePlay)
    }
];

export const mobileNavigation = [
    {
        label: "Home",
        href: "/",
        icon: React.createElement(MdHomeFilled)
    },
    ...navigation,
    {
        label: "Search",
        href: "/search",
        icon: React.createElement(IoSearchOutline)
    }
];
