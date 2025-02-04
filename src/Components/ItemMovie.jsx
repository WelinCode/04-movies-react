export const ItemMovie = ({ id, Title, Type, Poster }) => {
  return (
    <article>
      <div>
        <img src={Poster} alt='' />
        <p>{Title}</p>
      </div>
    </article>
  );
};
