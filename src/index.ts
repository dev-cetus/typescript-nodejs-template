export const main = () => "Hello World";

if (require.main === module) {
    console.log(main()); // tslint:disable-line
}
