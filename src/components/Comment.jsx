import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <div className={styles.Comment}>
      <img src="https://github.com/EygonSaldanha.png" />

      <div className={styles.commntBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Eygon Saldanha</strong>

              <time title="11 de maio as 08:33" dateTime="2023-02-03 18:05:00">
                Cerca de 1h atrás
              </time>
            </div>
            <button title="Deletar comentario">
              <Trash size={20} />
            </button>
          </header>
          <p> Muito bom devon, parabéns!!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
