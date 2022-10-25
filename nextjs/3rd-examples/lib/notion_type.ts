import Notion, {
    DatabaseProps,
    ParsedPage,
    ParsedPageWithBlocks,
} from "@notion-cms/client";

export type Duration =
    | "Short (0-15 min)"
    | "Medium (15-30 min)"
    | "Long (30+ min)";
export type HealthLevel = "Indulging" | "Comforting" | "Energising";
interface RecipeProps extends DatabaseProps {
    Name: string;
    "Health score": HealthLevel;
    "Preparation time (min)": Duration;
    "Cooking time (min)": Duration;
    Serves: number;
}
export interface Recipe extends ParsedPage<RecipeProps> { }
export interface RecipeWithBlocks extends ParsedPageWithBlocks<RecipeProps> { }