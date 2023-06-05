import { SetFeatureFlag } from "@openshift-console/dynamic-plugin-sdk";

const FUSION_FLAG = "FUSION";

export const enableFusion = (setFlag: SetFeatureFlag) =>
  setFlag(FUSION_FLAG, true);
