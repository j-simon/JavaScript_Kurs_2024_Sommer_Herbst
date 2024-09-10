// 1.Deklaration
async function tueWas() {

   // throw new Error("es ist was schiefgegangen")
    return "tueWas() aufgerufen!"
}



async function init() {
    try {
        // 2. Funktionsaufruf
        const rueckgabeWert = await tueWas()
        console.log('rueckgabeWert --->', rueckgabeWert);
    } catch (error) {
        //console.log(error)
        console.log("es ist was schiefgegangen!")
    }


}

init()
