import shelf from "../../public/shelf.png";

const EmptyShelf = () => {
   return (
      <div className="empty-shelf">
         <h2>No books on this shelf yet.</h2>
         <img src={shelf} alt="Empty shelf" />
      </div>
   );
};

export default EmptyShelf;
