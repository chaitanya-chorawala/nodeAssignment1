//Assignment - 1
// Write a Node.js program to do the following:
// Create Directory ( Hint: fs.mkdir )
// Remove Directory ( Hint: fs.rmdir )
// Write File 
// Read File 
// Delete File
// Append data to file
// Update / Replace file with new data
// Rename File

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
const fs = require("fs");

var menu = () => {
    console.log("\n0. Exit");
    console.log("1. Create directory");
    console.log("2. Remove directory");
    console.log("3. Write file");
    console.log("4. Read file");
    console.log("5. Delete file");
    console.log("6. Append data to file");
    console.log("7. Update/Replace data to file");
    console.log("8. Rename file");
    
    rl.question("Enter your choice: ", (answer) => {                
        action(answer);                
    });    
};

var createDirectory = (dirName) => {
    if(!fs.existsSync(dirName)){
        fs.mkdir(dirName, (err) => {
            if(err){
                console.log(err);
            }else{
                console.log("Directory created!");
            }
            menu();
        });
    }
};

var removeDirectory = (dirName) => {
    if(fs.existsSync(dirName)){
        fs.rmdir(dirName, (err) => {
            if(err){
                console.log(err);
            } else { 
                console.log("Directory removed!");
            }
            menu();
        });
    } else {
        console.log("Directory is not exists!");
    }
};

var writeFile = (fileName, fileContent) => {
    fs.writeFile(fileName, fileContent, (err) => {
        if(err){
            console.log(err);
        }else{
            console.log("File saved!");
        }
        menu();
    });
};

var readFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err){
            console.log(err);
        } else{
            console.log(data);
        }
        menu();
    });
};

var deleteFile = (fileName) => {
    fs.unlink(fileName, (err) => {
        if(err){
            console.log(err);
        } else{
            console.log("File Deleted!");
        }
        menu();
    });
};

var appendFile = (fileName, fileContent) => {
    fs.appendFile(fileName, fileContent, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("Content append!");
        }
        menu();
    });
};

var renameFile = (oldFileName, newFileName) => {
    fs.rename(oldFileName, newFileName, (err) => {
        if(err){
            console.log(err);
        } else {
            console.log("File changed!");
        }
        menu();
    });
};

var action = (choice) => {
    if (choice == 1) {
        console.log("--------Create directory------");
        rl.question("Directory Name: ", (answer) => {
            createDirectory(answer);
        });
    } else if (choice == 2) {
        console.log("--------Remove directory------");
        rl.question("Directory Name: ", (answer) => {
            removeDirectory(answer);
        });
    } else if (choice == 3){
        console.log("--------Write data------");
        rl.question("File name: ", (answer) => {
            var fileName = answer + ".txt";
            rl.question("File content: ", (answer) => {
                var content = answer;
                writeFile(fileName, content);
            });   
        });
    } else if (choice == 4){
        console.log("--------Read File------");
        rl.question("File name: ", (answer) => {
            var fileName = answer + ".txt";
            readFile(fileName);
        });
    } else if (choice == 5){
        console.log("--------Delete File------");
        rl.question("File name: ", (answer) => {
            var fileName = answer + ".txt";
            deleteFile(fileName);
        });
    } else if (choice == 6){
        console.log("-------Append data------");
        rl.question("File name: ", (answer) => {
            var fileName = answer + ".txt";
            rl.question("File content: ", (answer) => {
                var fileContent = answer;
                appendFile(fileName, fileContent);
            });
        });
    } else if (choice == 7){
        console.log("-------Replace data------");
        rl.question("File name: ", (answer) => {
            var fileName = answer + ".txt";
            rl.question("File content: ", (answer) => {
                var content = answer;
                writeFile(fileName, content);
            });   
        }); 
    } else if (choice == 8){
        console.log("-------Rename file------");
        rl.question("Old file name: ", (answer) => {
            var oldFileName = answer + ".txt";
            rl.question("New file name: ", (answer) => {
                var newFileName = answer + ".txt";
                renameFile(oldFileName, newFileName);
            });
        });
    } else if (choice == 0){
        rl.close();        
    } else {        
        menu();
    }
};

console.log("Welcome to file system!")
menu();