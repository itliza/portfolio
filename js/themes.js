// var btn = document.getElementById("theme-button");
// var link = document.getElementById("theme-link");

// btn.addEventListener("click", function () { ChangeTheme(); });

// function ChangeTheme()
// {
//     let lightTheme = "css/light.css";
//     let darkTheme = "css/dark.css";

//     var currTheme = link.getAttribute("href");
//     var theme = "";

//     if(currTheme == lightTheme)
//     {
//      currTheme = darkTheme;
//      theme = "dark";
//     }
//     else
//     {    
//      currTheme = lightTheme;
//      theme = "light";
//     }

//     link.setAttribute("href", currTheme);

//     Save(theme);
// }



        const checkbox = document.querySelector('input[name=theme]'),
              btn = document.getElementById("theme-button"),
              link = document.getElementById("theme-link");

        checkbox.addEventListener('change', function() {
            let lightTheme = "css/light.css";
            let darkTheme = "css/dark.css";
            var currTheme = link.getAttribute("href");
            var theme = "";
            if(this.checked) {
                trans()
                // document.documentElement.setAttribute('data-theme', 'dark')
                currTheme = darkTheme;
                theme = "dark";
            } else {
                trans()
                // document.documentElement.setAttribute('data-theme', 'light')
                currTheme = lightTheme;
                theme = "light";
            }
    link.setAttribute("href", currTheme);

        })

        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition')
            }, 1000)
        }