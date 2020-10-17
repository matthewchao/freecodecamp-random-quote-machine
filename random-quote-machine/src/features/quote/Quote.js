const quotesArray = [
    {
        "quote": "hi",
        "author": "Matthew Chao"
    },
    {
        "quote": "No",
        "author": "Jose Espinola Lopez"
    },
    {
        "quote": "Abraham Lincoln once said that 'If you're a racist, I will attack you with the North,' and these are the principles I carry with me in the workplace.",
        "author": "Michael Scott"
    }
]
const n = quotesArray.length;


// first the "slice" stuff:
import { createSlice } from "@reduxjs/toolkit";

const quoteSlice = createSlice({
    name: 'quote',
    initialState: {
        index: 0, //initial quote is the first one
        color: 'rgb(255,255,255)' //initial background color is white
    },

    //reducers is an object with reducing functions for different actions
    //in our case "change" would correspond to a switch statement on action.type == 'change'
    reducers: {
        change: state => {
            // the only criterion is that we insist the new index is different from the old one
            let newIndex = Math.floor(Math.random()*n);
            while (newIndex===state.index) {
                newIndex = Math.floor(Math.random()*n);
            }

            //redux toolkit allows mutating reducers
            state.index = newIndex;

            //TODO: ADD COLOR CHANGE
        },

    }
})

