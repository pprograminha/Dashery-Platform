import { Router } from "express";
import path from "path";
const router = Router();
const pathFirstPiece = "../public/";
const pathSecondyPiece = "pages/";
const pathThirdPiece = ".html";

router.get("/", (req, res) => {
    return res.sendFile(
        path.join(__dirname, `${pathFirstPiece}index${pathThirdPiece}`)
    );
});
router.get("/contact", (req, res) => {
    return res.sendFile(
        path.join(
            __dirname,
            `${pathFirstPiece}${pathSecondyPiece}contact${pathThirdPiece}`
        )
    );
});
router.get("/depositions", (req, res) => {
    return res.sendFile(
        path.join(
            __dirname,
            `${pathFirstPiece}${pathSecondyPiece}depositions${pathThirdPiece}`
        )
    );
});

// api
router.get("/api/blogs", (req, res) => {});

export { router };
