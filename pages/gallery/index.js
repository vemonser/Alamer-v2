import { Box } from "@chakra-ui/react";
import Gallery from "react-grid-gallery";

import GalleryHero from "../../components/gallery/GalleryHero";




//  prev            thumbnailWidth: 450,
//                  thumbnailHeight: 300,
const IMAGES = [
  {
    src: "https://github.com/vemonser/photos/blob/main/00000001.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/00000001.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/00000002.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/00000002.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://github.com/vemonser/photos/blob/main/00000003.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/00000003.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/00000004.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/00000004.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/014.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/014.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://github.com/vemonser/photos/blob/main/016.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/016.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/022.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/022.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/023.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/023.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://github.com/vemonser/photos/blob/main/025.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/025.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/20200324_082622.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/20200324_082622.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
    caption: "After Rain (Jeshu John - designerspics.com)",
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/20200324_082718.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/20200324_082718.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,

    caption: "Boats (Jeshu John - designerspics.com)",
  },

  {
    src: "https://github.com/vemonser/photos/blob/main/Dark%20Emperador.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/Dark%20Emperador.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/Garage2.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/Garage2.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6025.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6025.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6032.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6032.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6033.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6033.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6040.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6040.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/MAIN%20LOBBY%201.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/MAIN%20LOBBY%201.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/TENT%201.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/TENT%201.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/TENT%202.jpg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/TENT%202.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/WhatsApp%20Image%202021-12-26%20at%201.46.39%20PM%20(2).jpeg?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/WhatsApp%20Image%202021-12-26%20at%201.46.39%20PM%20(2).jpeg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6071.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6071.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/028.jpg?raw=true",
    thumbnail: "https://github.com/vemonser/photos/blob/main/028.jpg?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
  {
    src: "https://github.com/vemonser/photos/blob/main/IMG_6026.JPG?raw=true",
    thumbnail:
      "https://github.com/vemonser/photos/blob/main/IMG_6026.JPG?raw=true",
      thumbnailWidth: 360,
      thumbnailHeight: 180,
  },
];

export default function LeasingForm({ currentDir }) {
  return (
    <>
      <GalleryHero />
      <Box
        style={{
          background: `url(${"https://github.com/vemonser/photos/blob/main/centerpattern.png?raw=true"})`,
          backgroundRepeat: "repeat-y",
          backgroundSize: "100%",
        }}
      >
        <Box maxW={"80vw"} mx="auto" height={"250vh"} py={"5vw"}>
          <Gallery
            images={IMAGES}
            enableLightbox={true}
            //  maxRows={6}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        </Box>
      </Box>
    </>
  );
}
