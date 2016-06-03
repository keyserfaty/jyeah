/*
 Example:

 jYeah.build({
 "header": {
   "links": {
     "Home": "http://home",
     "About":  "http://about"
   },
   "text": "Cosas sas sas sas",
   "title": "title",
   "subtitle": "subtitle"
   }
 });

 */

/**
 * Constants
 */

const EXPECTED_PROPS = ['links', 'text', 'title', 'subtitle'];


const htmlTool = {};

htmlTool.closingTag = (tag) => (
  `</${tag}>`
);

htmlTool.tag = (input) => {
  const tag = Object.keys(input);
  return `<${tag}>`
};

htmlTool.a = (input) => {}
htmlTool.p = (input) => {}
htmlTool.h1 = (input) => {}
htmlTool.h2 = (input) => {}

/**
 * Tools
 */

const fail = (err) => (
  console.log(err)
);

const existy = (arg) => {
  if (arg != null) {
    return true;
  }
  return fail(`You should input a value different from ${null} or ${undefined}`);
};

const truthy = (arg) => {
  if (arg !== false && existy(arg)) {
    return true;
  }
  return fail(`You should input a value different from ${false}`);
};

const isJson = (arg) => {
  try {
    JSON.parse(arg);
  } catch (e) {
    return fail('You should input a Json to get started!');
  }
  return true;
};

const isValidJson = (arg) => (
  truthy(arg) && isJson(arg)
);

const hasCorrectProps = (json) => {
  return Object.keys(json).map(key => {
    const enteredProps = Object.keys(json[key]);

    enteredProps.map(prop => {
      if (EXPECTED_PROPS.indexOf(prop) !== -1) {
        return true
      }
      return false
    });
  });
};

const addTag = (tag) => {};

/**
 * Library
 */

const jyeah = {};

jyeah.build = (json) => {
  const output = {
    html: [],
  };

  if (!isValidJson(json)) {
    return fail('You should input a valid Json to get started!');
  }

  const parsedJson = JSON.parse(json);
  console.log(hasCorrectProps(parsedJson))
  if (!hasCorrectProps(parsedJson)) {
    return fail(
      `You've entered a prop that is not in the list of possible props. 
        A correct prop would be any of these: ${EXPECTED_PROPS}`
    );
  }
  //
  // Object.keys(json).map(key => {
  //   const tag = json[key];
  //   output.html.push(htmlTool.tag(tag));
  //   console.log(output.html)
  //
  //   Object.keys(json[key]).map(k => {
  //     const currentObj = json[key][k];
  //     switch (currentObj) {
  //       case 'title':
  //         return htmlTool.h1(currentObj);
  //
  //       case 'subtitle':
  //         return htmlTool.h2(currentObj);
  //
  //       case 'links':
  //         return htmlTool.a(currentObj);
  //
  //       case 'text':
  //         return htmlTool.p(currentObj);
  //     }
  //   });
  //
  //   htmlTool.closingTag(tag);
  // });


};



const input = {
  "header": {
    "links": {
      "Home": "http://home",
      "About":  "http://about"
    },
    "text": "Cosas sas sas sas",
    "title": "title",
    "subtitle": "subtitle"
  }
};

jyeah.build(JSON.stringify(input))