        const Pet = () => {
            return React.createElement("div", {}, [
                React.createElement("h1", {}, "Luna"),
                React.createElement("h1", {}, "Dog"),
                React.createElement("h1", {}, "Havanese"),
            ])
        }
        
        
        
        const App = () => {
            return React.createElement(
                "div",
                {id: "something-imp"},
                [
                React.createElement("h1", {}, "Adopt Me"),
                React.createElement(Pet),
                React.createElement(Pet),
                React.createElement(Pet)
            ]
            );
       };

       ReactDOM.render(React.createElement(App), document.getElementById("root"));