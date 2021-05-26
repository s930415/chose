exams = [];

exam = {
    id: '',
    question: '',
    options: [],
    user_answer: {
        option_id: ''
    }
}
/**
 * 取題目(XHR)
 */
xhr = new XMLHttpRequest();
xhr.open("GET", "https://example")
xhr.send();
xhr.onreadystatechange = function () {
    var data;
    var parser = new DOMParser();

    if (this.readyState === 4 && this.status === 200) {
        data = parser.parseFromString(this.responseText, "application/xml");
        exams = xml2json(data, '')
        console.log(JSON.parse(exams));
    }
};
xhr.onload = function () {
    console.log('onload');
};
xhr.onerror = function () {
    console.log('error');
};


