
export interface iData {
    dataId: number;
    name: string;
    descriptions: string;
}

export const DATA: iData[] = [
    { dataId: 1, name: 'Dinosaur', descriptions: 'Ancient Animal.' } as iData,
    { dataId: 2, name: 'Mircrowave', descriptions: 'Primitive Heating Device.' } as iData,
    { dataId: 3, name: 'Newspaper', descriptions: 'Free Advertising.' } as iData,
    { dataId: 4, name: 'Ocean', descriptions: 'Scary do not mention.' } as iData,
    { dataId: 5, name: 'Jupiter', descriptions: 'Is it a planet though?.' } as iData,
    { dataId: 6, name: 'Stardust', descriptions: 'It tastes just like coolaid.' } as iData,
    { dataId: 7, name: 'Milkybar', descriptions: 'A galaxy related food item.' } as iData,
    { dataId: 8, name: 'Typescript', descriptions: 'What is being used to write this.' } as iData,
    { dataId: 9, name: 'Maturity', descriptions: 'Non existent.' } as iData
]
