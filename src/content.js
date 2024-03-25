const obj = {};

const phonetics = document.querySelector(".phonetics");

if (phonetics) {
  const arr = [...phonetics.children];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    obj[element.className] = ((arrChildren) => {
      // THIS WE WILL RETURN
      const arr = [];

      // COUNT OF DIV TAGS THAT CONTAINS AUDIO SRC
      let audioIndex;

      for (let index = 0; index < arrChildren.length; index++) {
        // GET CHILD
        const element = arrChildren[index];

        // IF IT IS A DIV
        if (element.tagName === "DIV") {
          // DEFINE AUDIO INDEX
          audioIndex =
            audioIndex === undefined // IF DIDN'T ADD ANY AUDIO
              ? 0 // EQUALS CERO (FIRST AUDIO)
              : audioIndex + 1; // INCREASE

          // ADD AUDIO OBJECT
          arr[audioIndex] = {
            ogg: element.getAttribute("data-src-ogg"),
            mp3: element.getAttribute("data-src-mp3"),
          };

          continue; // PASS TO NEXT DIV OR SPAN TAG
        }

        if (element.className === "sep") continue; // PASS TO NEXT DIV OR SPAN TAG

        // ADD TO AUDIO OBJECT TEXT FROM SPAN TAGS
        arr[audioIndex][element.className] = element.textContent;
      }

      return arr;
    })([...element.children]);
  }
}


chrome.runtime.onMessage.addListener((message,sender,sendResponse) => {

  sendResponse(obj)

})

export {};
