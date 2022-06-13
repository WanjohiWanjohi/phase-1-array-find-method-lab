function superbowlWin(arrayOfObjects){
        
    const result = arrayOfObjects.find( arrayOfObjects => arrayOfObjects.result === "W" );
    return !!result ? result.year : undefined;
}