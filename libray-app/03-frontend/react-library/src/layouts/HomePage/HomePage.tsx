import { Carousel } from "./components/Carousel";
import { ExplorerTopBooks } from "./components/ExplorerTopBooks";
import { Heros } from "./components/Heros";
import { LibraryService } from "./components/LibraryServices";

export const HomePage = () => {
    return (
        <>
        <ExplorerTopBooks></ExplorerTopBooks>
        <Carousel></Carousel>
       <Heros></Heros>
       <LibraryService></LibraryService>
        </>
    );
}