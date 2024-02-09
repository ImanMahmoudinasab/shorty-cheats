import "./App.css";
import "./theme/theme.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

function App() {
  return (
    <>
      <header className="pt-1 flex justify-center">
        <Tabs defaultValue="apps">
          <TabsList>
            <TabsTrigger value="apps">App switch</TabsTrigger>
            <TabsTrigger value="emojis">Emojis</TabsTrigger>
          </TabsList>
          <TabsContent value="apps">App Shortcuts</TabsContent>
          <TabsContent value="emojis">Emoji Shortcuts</TabsContent>
        </Tabs>
      </header>
    </>
  );
}

export default App;
