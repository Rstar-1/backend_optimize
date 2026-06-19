import express from "express";
import { 
  getDashboard, 
  getRepositories, 
  getBranches,
  getCommits, 
  getPullRequests 
} from "./github.controller.js";

const router = express.Router();

router.get("/dashboard", getDashboard);
router.get("/repositories", getRepositories);
router.get("/branches", getBranches);
router.get("/commits", getCommits);
router.get("/pull-requests", getPullRequests);

export default router;
