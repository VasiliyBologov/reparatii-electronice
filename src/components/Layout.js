import React, {useState} from "react";
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import TopBar from '../../src/components/TopBar';

import { useNavigate } from 'react-router-dom';



export default function Layout() {
    const navigate = useNavigate();
    return (
        <>
            <TopBar />
            <Outlet />
        </>
      );
}
