import { CircleQuestionMark, HelpCircle, Mail, Upload, Zap } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

export function HelpButton () {
    return (
        <Dialog>
        <DialogTrigger asChild>
          <Button
            size="icon"
            className="fixed bottom-6 right-6 h-12 w-12 rounded-full bg-white text-black shadow-lg border border-border cursor-pointer hover:bg-white/90"
          >
            <CircleQuestionMark className="!h-5 !w-5" />
            <span className="sr-only">Ajuda</span>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md dark:border-muted-foreground">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <HelpCircle className="h-5 w-5" />
              Como usar o analisador
            </DialogTitle>
            <DialogDescription className="font-medium text-muted-foreground text-left">Siga estes passos simples para analisar seus emails</DialogDescription>
          </DialogHeader>
          <div className="flex flex-col gap-5">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Escolha o modo de análise</h3>
                <p className="text-sm font-me text-muted-foreground">
                  Selecione "Email único" para colar um email ou "Arquivo em Lote" para fazer upload de um arquivo com
                  vários emails
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Insira o conteúdo</h3>
                <p className="text-sm text-muted-foreground">
                  Para email único: cole o texto na área de texto. Para arquivo em lote: faça upload de um arquivo
                  (apenas um por análise)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-medium">Obtenha a análise</h3>
                <p className="text-sm text-muted-foreground">
                  Clique em "Analisar" para obter a classificação do email e sugestão de resposta automática
                </p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
}