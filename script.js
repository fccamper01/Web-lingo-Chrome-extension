let content ={
    question1: "What is propagation?",
    answer1: "Propagation is the amount of time required for changes to your domain name servers to take effect. In other words, when DNS changes are made, every DNS server in the world needs to update its records of what IP is associated with which domains and this can take time.",
    question2: "What does SERP stand for?",
    answer2: "SERP stands for Search Engine Results Pages and are pages that display the results from a searcher's search query.",
    question3: "What is wireframe?",
    answer3: "A wireframe is visual guide used to  show the structure of a web page without any design elements. It typically comes into play during a website redesign or page design.",
    question4: "What is Findability?",
    answer4: "Findability is an internet marketing term that refers to how easily information on a website can be found, either from search engines and other online directories and resources, or from within the site itself.",
    question5: "What is Image Map?",
    answer5: "An image map is a list of coordinates related to a image, such that clicking certain areas of the image links to different pages. With a normal image link, the entire image would link to one single page.",
    question6: "What JPEG stands for?",
    answer6: "Short for 'Joint Photographic Experts Group,' the group that created the standards for what are JPEG images (JPEG is the type of file, while JPG is the file extension). JPEGs use adjustable compression, meaning you can make them smaller (though at the cost of clarity) for uses such as web.",
    question7: "What does AJAX stand for?",
    answer7: "AJAX stands for Asynchronous JavaScript and XML. Is a method where data is exchanged with a server allowing parts of a web page to be updated without the need to reload the entire page.",
    question8: "What is SaaS?",
    answer8: "(Software as a Service) SaaS is a licensing and delivery model in which software is licensed on a subscription basis and distributed to customers via the internet. Examples of Saas: Dropbox, DocuSign, Slack and Amazon Web Services (AWS)."
};

let i=1;

let button =document.querySelectorAll("button");
let questionField =document.querySelector("#questionField");
let asnwerField=document.querySelector("#answerField");

window.addEventListener("click", function(){
    questionField.innerHTML=content["question"+i];
    console.log(content["question"+i]);
});

button[0].addEventListener("click", function(){
    asnwerField.style.visibility="visible";
    asnwerField.innerHTML=content["answer"+i];
});

button[1].addEventListener("click", function(){
    console.log("next button test");
    i++
    questionField.innerHTML=content["question"+i];
    console.log(content["question"+i]);
    asnwerField.style.visibility="hidden";
});