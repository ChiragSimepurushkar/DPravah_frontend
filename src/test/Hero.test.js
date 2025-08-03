import React from 'react';
import {render,screen} from '@testing-library/react'
// import '@testing-library/jest-dom/extend-expect';

import Hero from "../landing_page/home/Hero";



describe("Hero component", ()=>{
    test("renders hero image", ()=>{
        render(<Hero/>);
        const heroImage = screen.getAllByAltText("Hero Image");
        expect(heroImage).toBeInTheDocument();
        expect(heroImage).toHaveAttribute("src","media/images/homeHero.png")
    });

    test("render signup button", ()=>{
        render(<Hero/>);
        const signupButton = screen.getByRole("button",{name:"signup now"});
        expect(signupButton).toBeInTheDocument();
        expect(signupButton).toHaveClass("btn-primary");
    });
})


