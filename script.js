function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}



document.getElementById('buttonn').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = getNumberOrString(document.getElementById('textt').value);

  element_list.appendChild(new_li);

});

var fruits;


fruits = ['Employers are looking for Full stack developers that are:   1. Full stack developer should be master of essential front-end technologies like HTML5, CSS3, JavaScript. Knowledge of third-party libraries like jQuery, LESS, Angular and ReactJS is desirable 2. Full stack engineer should know at least one server-side programming languages like Java, Python, Ruby, .Net etc. 3. A version control system allows full stack developers to keep track of all the changes made in the codebase. The knowledge of Git helps full stack developers to understand how to get the latest code, update parts of the code, make changes in other developer’s code without breaking things.', 'Employers are looking for Front end developers that are:  1. A front-end developer creates websites and applications using web languages such as HTML, CSS, and JavaScript allow users to access and interact with the site or app. When you visit a website, the design elements you see were created by a front-end developer. 2. HTML, CSS, and JavaScript: These three languages are essential to anyone who wants to work in front-end development. HTML, CSS, and JavaScript work together to determine the look and functionality of the page.  3. Creativity, Problem-solving, Communication, Teamwork', 'Employers are looking for QA testers that are:  1. A company’s product must meet its customers\' requirements. A skilled QA tester knows how to think from a customer’s perspective throughout the entire software development cycle; we might recast this as "empathy." For example, a good tester should be able to create many “What if” scenarios and make sure the software responds to each possibility. This way, when the customer encounters one of these scenarios, the software will still continue to work properly.  2. QA testers need to be comfortable with different testing techniques (such as automation versus manual testing), common tools, and at least a passing familiarity with the options. For example, manual-testing skills alone won’t cut it. If the job calls for automation testing, then that is what they should be able to do as well. But don\'t hire purely based on past experience; look for evidence that the job candidate has regularly learned new things. Someone who has become proficient in five older tools probably can learn the next five -- including some that aren\'t created yet.  3. Project changes are almost always part of the gig, which means that there is no single way to handle issues that develop. There is always room for self-improvement. QA testers must adapt quickly to new tools and techniques'];


document.getElementById('button').addEventListener('click', (event) => {
  if (!!fruits.length) {
    let element_list = document.getElementById('list');
    let new_li = document.createElement('li');
    new_li.innerText = fruits.shift();

    element_list.appendChild(new_li);
  }

});