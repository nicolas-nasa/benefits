Para rodar o projeto

```bash
npm run dev
```

para criar a imagem docker

```bash
docker build -t benefits .
```

Para inicar a instancia

```bash
docker run -d -p 3000:3000 benefits

```

TODO -

- [x] Criação do servidor e abistração
- [x] Criação das rotas
- [ ] Testes
- [ ] Implementação ORM
- [ ] Migrations
- [x] Documentação
- [ ] Model
- [ ] Metricas
- [ ] Deploy
- [x] Container
- [ ] Pipeline
