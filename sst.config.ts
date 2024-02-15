import { SSTConfig } from "sst";
import { API } from "./stacks/MyStack";

export default {
  config(_input) {
    return {
      name: "dotenv-issue-reproducer",
      region: "us-east-1",
    };
  },
  stacks(app) {
    console.log(process.env);
    app.stack(API);
  },
} satisfies SSTConfig;
