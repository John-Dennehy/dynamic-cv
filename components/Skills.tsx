import Styles from '../styles/CV.module.scss'
import Badge from '../components/Badge';
import { byName } from '../lib/sort';
import * as Types from '../lib/types';

interface Props {
  data: Array<Types.Skill>
}

const Skills = ({ data }: Props): JSX.Element => {

  return (
    <div className={Styles["skills"]}>
      {data
        .sort(byName)
        .map((skill: Types.Skill) => (
          <Badge key={skill.id} showcase={skill.showcase} >
            <>
              <img src={skill.icon.url} alt="" />
              {skill.name}
            </>
          </Badge>
        )
        )}
    </div>
  )
}

export default Skills
