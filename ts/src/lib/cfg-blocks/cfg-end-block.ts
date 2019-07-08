import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $CfgAction, CfgAction } from "../cfg-action";
import { $CfgLabel, CfgLabel } from "../cfg-label";
import { $CfgBlockType, CfgBlockType } from "../cfg-block-type";
import { LiteralType } from "kryo/types/literal";

export interface CfgEndBlock {
  readonly type: CfgBlockType.End;
  readonly label: CfgLabel;
  readonly actions: ReadonlyArray<CfgAction>;
}

export const $CfgEndBlock: DocumentIoType<CfgEndBlock> = new DocumentType<CfgEndBlock>(() => ({
  properties: {
    type: {type: new LiteralType({type: $CfgBlockType, value: CfgBlockType.End as CfgBlockType.End})},
    label: {type: $CfgLabel},
    actions: {type: new ArrayType({itemType: $CfgAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
}));