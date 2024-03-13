

// export function parseAndHandleErrorGlobal(jsonString: string, begTrigger: string, endTrigger: string): { validJson: string, erroredObjects: string[] } {
//     const erroredObjects: string[] = [];
//     let validJson: string;
//     let isParsingComplete = false;

//     while (!isParsingComplete) {
//         try {
//             // Tentative de parsing du JSON
//             // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
//             const parsedJson = JSON.parse(jsonString);
//             isParsingComplete = true;
//         } catch (error) {
//             // En cas d'erreur de parsing, recherchez l'élément erroné
//             const regex = /position (\d+)/;
//             const match = regex.exec(error.message);

//             if (match) {
//                 const errorPosition = parseInt(match[1]);

//                 // Trouver l'objet erroné en se basant sur la position de l'erreur
//                 const start = jsonString.lastIndexOf(begTrigger, errorPosition);
//                 const end = jsonString.indexOf(endTrigger, errorPosition) + 1;
//                 const erroredObject = jsonString.substring(start, end);

//                 // Ajouter l'objet erroné à la liste et supprimer de la chaîne JSON
//                 erroredObjects.push(erroredObject);

//                 jsonString = jsonString.substring(0, start) + jsonString.substring(end);

//             } else {
//                 // Si l'erreur ne peut pas être localisée, arrêter la boucle
//                 isParsingComplete = true;
//             }
//         }
//     }


//     validJson = jsonString.replace(/,\s*,/, ",");
//     validJson = validJson.replace(/,\s*\]/, "]");
//     return { validJson, erroredObjects };
// }

function splitData(jsonString: string):string[] {
    const myList = jsonString.split("},{\n");
    let beginList = myList[0].split("{");
    beginList = beginList.slice(2)
    const begin = beginList.join("{");
    myList[0] =  begin;
    let endList = myList[myList.length - 1].split("}");
    endList = endList.slice(0, endList.length - 2);
    const end = endList.join("}");
    myList[myList.length - 1] = end ;
    return myList;
}
export default function parseAndHandleError(jsonString: string):{ validJson: string, erroredObjects:string[]} {
    let validJson: string = "";
    const erroredObjects: string[] = [];
    const myList = splitData(jsonString);
    for (let i = 0; i < myList.length; i++) {
        const element = "{" + myList[i] + "}";
        try {
            // eslint-disable-next-line prefer-const, @typescript-eslint/no-unused-vars
            const parsedJson = JSON.parse(element);
            validJson = validJson + element + ",";
        } catch (error) {
            erroredObjects.push(element);
        }
    }

    validJson = "[ " +  validJson + "]"
    validJson = validJson.replace(/,\s*,/, ",");
    validJson = validJson.replace(/,\s*\]/, "]");
    //console.log(erroredObjects);
    return { validJson, erroredObjects };

    
}