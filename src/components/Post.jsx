import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header className="oi">
        <div className={styles.author}>
          <Avatar src="https://github.com/EygonSaldanha.png" />
          <div className={styles.authorInfo}>
            <strong>Dego Fernandes</strong>
            <span>Wev dev</span>
          </div>
        </div>

        <time title="11 de maio as 08:33" dateTime="2023-02-03 18:05:00">
          Publicado a 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          👉 <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a> <a href="">#nlw</a>{" "}
          <a href="">#rocketseat</a>
        </p>
      </div>
      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe seu comentario" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment />
      </div>
    </article>
  );
  const DetalheNotificacao = ({ notificacao }) => {
    return (
      <>
        <Paper sx={{ padding: 2, marginTop: 2 }}>
          <FormTitle title={"Dados da notificacao"} variant={"h8"} />
          <Grid container xs={12}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography variant="body1">
                <span style={{ fontWeight: "bold" }}>Area: </span>
                {notificacao.aprovacao.area.siglaCustom}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography variant="body1">
                <span style={{ fontWeight: "bold" }}>Data notificação: </span>
                {notificacao.dataCadastro}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography variant="body1">
                <span style={{ fontWeight: "bold" }}>
                  Quantidade de dias para ajustes:{" "}
                </span>
                {notificacao.qtdDias}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="body1">
                <span style={{ fontWeight: "bold" }}>Início do prazo: </span>
                {notificacao.dataInicio || "Não iniciado"}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
              <Typography variant="body1">
                <span style={{ fontWeight: "bold" }}>Término do prazo: </span>
                {notificacao.dataFim || "Não iniciado"}
              </Typography>
            </Grid>
          </Grid>
          <Stack direction={{ xs: "column", lg: "row" }} spacing={2}>
            <Paper sx={{ padding: 2, marginTop: 2, width: "100%" }}>
              <DadosNotificacao aprovacao={notificacao.aprovacao} />
            </Paper>
            <Stack direction={"column"} sx={{ width: "100%" }}>
              <span style={{ fontWeight: "bold" }}>
                Observação(Para uso interno):
              </span>
              <FormTextField
                rows={5}
                xs={12}
                sm={12}
                md={12}
                lg={12}
                multiline
                name={"observacao"}
                value={notificacao.aprovacao.observacao}
                semLabel
              />
              <span style={{ fontWeight: "bold" }}>
                Notificação(Para ser apresentado ao Ente Federativo):
              </span>
              <FormTextField
                rows={5}
                xs={12}
                sm={6}
                md={6}
                lg={6}
                value={notificacao.observacao}
                semLabel
                multiline
              />
            </Stack>
          </Stack>
        </Paper>
      </>
    );
  };

  const SecaoMultilinhas = ({ titulo, valor }) => {
    return (
      <Paper sx={{ padding: 2, marginTop: 2 }}>
        <FormTitle title={titulo} variant={"h8"} />
        <FormTextField semLabel disabled multiline value={valor} />
      </Paper>
    );
  };
}
