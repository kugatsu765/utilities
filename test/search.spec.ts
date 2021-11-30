import { searchInArray, searchInObject, searchsInArray, searchsInArrayBySplit } from '../src/search'

describe("searchInObject", () => {
    const datas = { name: "Aline", age: 30, sport: ["tennis", "badminton"] };

    it("should find something", () => {
        const keywords = "aline"
        const find = searchInObject(datas, keywords);

        expect(find).toEqual(true);
    });

    it("should find something in sub array", () => {
        const keywords = "tennis"
        const find = searchInObject(datas, keywords);

        expect(find).toEqual(true);
    });

    it("should not find something", () => {
        const keywords = "soccer"
        const find = searchInObject(datas, keywords);

        expect(find).toEqual(false);
    });
});

describe("searchInArray", () => {

    const datas = [
        { name: "Romain", age: 32, sport: ["tennis", "badminton"] },
        { name: "Aline", age: 30, sport: ["badminton"] }
    ]

    it("should find something (1 results)", () => {
        const keywords = "tennis"
        const find = searchInArray(datas, keywords);

        expect(find.length).toEqual(1);
    });

    it("should find something (2 result)", () => {
        const keywords = "badminton"
        const find = searchInArray(datas, keywords);

        expect(find.length).toEqual(2);
    });


    it("should not find something", () => {
        const keywords = "soccer"
        const find = searchInArray(datas, keywords);

        expect(find.length).toEqual(0);
    });


});

describe("searchsInArray", () => {

    const datas = [
        { name: "Romain", age: 32, sport: ["tennis", "badminton"] },
        { name: "Aline", age: 30, sport: ["badminton"] }
    ]

    it("should find something (1 results)", () => {
        const keywords = ["tennis"]
        const find = searchsInArray(datas, keywords);

        expect(find.length).toEqual(1);
    });

    it("should find something (2 result)", () => {
        const keywords = ["badminton"]
        const find = searchsInArray(datas, keywords);

        expect(find.length).toEqual(2);
    });

    it("should find something (2 result)", () => {
        const keywords = ["badminton", "30"]
        const find = searchsInArray(datas, keywords);

        expect(find.length).toEqual(1);
    });


    it("should not find something", () => {
        const keywords = ["soccer"]
        const find = searchsInArray(datas, keywords);

        expect(find.length).toEqual(0);
    });

});

describe("searchsInArrayBySplit", () => {

    const datas = [
        { name: "Romain", age: 32, sport: ["tennis", "badminton"] },
        { name: "Aline", age: 30, sport: ["badminton"] }
    ]

    it("should find something (1 results)", () => {
        const keywords = "tennis+32"
        const find = searchsInArrayBySplit(datas, keywords, '+');

        expect(find.length).toEqual(1);
    });

});