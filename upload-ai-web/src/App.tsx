import { Github, FileVideo, Upload, Wand2 } from "lucide-react";
import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";
import { Textarea } from "./components/ui/textarea";
import { Label } from "./components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./components/ui/select";
import { Slider } from "./components/ui/slider";
import { VideoInputForm } from "./components/ui/video-input-form";

export function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="text-xl font-bold">upload.ai</h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed with love
          </span>

          <Separator orientation="vertical" className="h-6" />
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
              Github
            </Button>
        </div>
      </div>

      <main className="flex-1 p-6 flex gap-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="grid grid-rows-2 gap-4 flex-1">
            <Textarea 
              className="resize-none p-4 leadind-relaxed"
              placeholder="Input Prompt for AI"
            />
            <Textarea 
              className="resize-none p-4 leadind-relaxed"
              placeholder="AI-Generated result"
              readOnly
            />
          </div>
          <p className="texr-sm text-muted-foreground">
            Remember: You can use the <code className="text-violet-400">{'{transcription}'}</code> variable in your prompt to add transiction text of your selected video
            </p>
        </div>

        <aside className="w-80 space-y-6">

          <VideoInputForm />
          
          <Separator />

          <form className="space-y-6">
          <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="title">Youtube title</SelectItem>
                  <SelectItem value="description">Youtube description</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Modelo</Label>
              <Select disabled defaultValue="gpt3.5">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will soon be able to customize this option
              </span>
            </div>
            <Separator />
            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider
               min={0}
               max={1}
               step={0.1} 
              />
              <span className="block text-xs text-muted-foreground italic leading-relaxed">
                Choosing the highest value tends to produce more creative results, but may also result in possible errors
              </span>
            </div>

            <Separator />
            <Button type="submit" className="w-full">
              Execute
              <Wand2 className="w-4 h-4 ml-2"/>
            </Button>
          </form>
        </aside>
      </main>
    </div>
  )
}