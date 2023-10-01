/*
React.creatElement will create an object 

const heading = React.createElement("h1",{id:"heading", class:"main"},"hello world!");                                  
const heading=React.createElement("tag name",{attributes(eg)id:"root",class:"main"},children);

const root = ReactDOM.createRoot(document.getElementById("root"));

render method will convert the object into h1 tag and put it in root
root.render(heading);
 
//if we have more than one siblings in side div then we will pass this items inside an arrya of objects


How we create nested structure inside react and also siblings too

<div id="parent">
    
<div id="child">
          <h1>hello</h1>
          <h2>world</h2>
    </div>

    <div id="child2">
          <h1>hello</h1>
          <h2>world</h2>
    </div>

</div>

top and bottom contents of div root tag will remains there qnd inbetween contents will replaced by React.



//react is a library because it can independently work as an small portion of our app...it is not framework.

libraries target a specific functionality, while a framework tries to provide everything required to develop a complete application

order of script and sdn is matter for correct execution of programm

What is JSX?
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

*/

const parent=React.createElement("div",
{ id:"parent"},[
    React.createElement("div",
    {id:"child"},
        [React.createElement("h1",{},"hello"),
        React.createElement("h2",{},"world")
    ]),
    
        React.createElement("div",
        {id:"child2"},
            [React.createElement("h1",{},"hello"),
            React.createElement("h2",{},"world")]),
              ]);

        console.log(parent);
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(parent);
