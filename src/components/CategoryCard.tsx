import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

interface CategoryCardProps {
  icon: LucideIcon;
  title: string;
  link: string;
}

const CategoryCard = ({ icon: Icon, title, link }: CategoryCardProps) => {
  return (
    <Link
      to={link}
      className="group flex flex-col items-center p-6 bg-card rounded-lg border border-border hover:border-primary hover:shadow-lg transition-all"
    >
      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
        <Icon className="h-10 w-10 text-primary" />
      </div>
      <h3 className="text-center font-semibold group-hover:text-primary transition-colors">{title}</h3>
    </Link>
  );
};

export default CategoryCard;
