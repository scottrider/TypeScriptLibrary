class FileOperations {
    constructor() {
        // Constructor can be left empty or used for initializations.
    }

    async readFileAsync(filePath: string) : Promise<string> {
        let fileData = "";
        try {
          const response = await fetch(filePath);
      
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          fileData = JSON.stringify(await response.json());
        } catch (error) {
          console.error(`Error fetching the file: ${error}`);
        }
      
        return fileData;
    }

}

export default FileOperations;