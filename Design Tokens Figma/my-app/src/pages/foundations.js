import React, { useEffect } from 'react';

const Foundations = () => {

    useEffect(() => {

       // const styleSheets = document.styleSheets;
       // const mystyleSheet = 'https://vinodchelmeda.github.io/uRIMS-Library/static/css/main.css';
        const mystyleSheet = document.styleSheets[1];// Server: 1, Local :2
        const style1 = mystyleSheet.cssRules;
        console.log(mystyleSheet);
    ///    console.log(style1);


          try {
            // Access the CSS rules of the stylesheet
         //   const rules = Array.from(mystyleSheet.cssRules);
            const rules = mystyleSheet.cssRules;
            const rulesArray = Array.from(rules)
            .filter((rule) => rule.selectorText.startsWith('.icon'))
            .map((rule) => {
                const classNames = rule.selectorText.split("::before").map(className => className.split("."));
                const ruleName = classNames;
                const ruleClass = rule.selectorText.split("::before").join('');
                const ruleClass1 = ruleClass.split('.').join('');
                console.log(ruleClass1);
                return {
                  ruleClass1,
                  ruleName,
                };
            });
           // console.log(rules);
            for (const rule of rulesArray) {
                console.log(rule.cssText);
              }
          } catch (error) {
            console.error('Error accessing CSS rules:', error);
          }


     //   const getAllCSSRules = async () => {
        //   for (const styleSheet of styleSheets) {
        //     try {
        //       let rules;
        //       if (styleSheet.href) {
        //         // Fetch the stylesheet if it's an external stylesheet
        //         const response = await fetch(styleSheet.href);
        //         const cssText = await response.text();
        //         const style = document.createElement('style');
        //         style.textContent = cssText;
        //         document.head.appendChild(style);
        //         rules = style.sheet.cssRules;
        //         document.head.removeChild(style);
        //       } else {
        //         // Use the rules directly if it's an internal stylesheet
        //         rules = styleSheet.rules || styleSheet.cssRules;
        //       }
    
        //       for (const rule of rules) {
        //        // console.log(rule.cssText);
        //         const ruleInfoArray = Array.from(rules)
              
        //         .filter((rule) => rule.selectorText.startsWith('.icon'))
        //        // .filter((rule) => rule.selectorText  && rule.selectorText.toLowerCase().startsWith(searchTerm.toLowerCase()))
        //         .map((rule) => {
        //           const classNames = rule.selectorText.split("::before").map(className => className.split("."));
        //           const ruleName = classNames;
        //           const ruleClass = rule.selectorText.split("::before").join('');
        //           const ruleClass1 = ruleClass.split('.').join('');
                 
               
        //       });
        //    //   console.log(ruleInfoArray);
        //     }
        //     } catch (error) {
        //       console.error('Error accessing CSS rules:', error);
        //     }
        //   }
       // };
    
      //  getAllCSSRules();
     }, []);
  
  
    //   const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    //   };
      return (
        <div>
            <center>
                <br/><br/>
          <h1>We are preparing foundations</h1>
          </center>
        </div>
      );
};

export default Foundations;