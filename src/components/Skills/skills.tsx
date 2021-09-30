import * as S from './styles';

export default function Skills () {
  return (
    <div style={{backgroundColor:'#171e24'}}>
      <S.Divider></S.Divider>
      <S.Div>
        <S.Column>
          <S.FirstTextSection variant="h2">
            Hard
          </S.FirstTextSection>
          <S.SecondtTextSection variant="h2">
            Skills
          </S.SecondtTextSection>
        </S.Column>
        <S.SkillsColumn>
          <S.Row>
            <S.Skill variant="h7">
              Typescript
            </S.Skill>
            <S.BackgroundBox>
              <S.HatchedBox style={{backgroundColor: 'darkblue', width: '50%'}}></S.HatchedBox>
            </S.BackgroundBox>
          </S.Row>

          <S.Row>
            <S.Skill variant="h7">
              NodeJs
            </S.Skill>
            <S.BackgroundBox>
              <S.HatchedBox style={{backgroundColor: 'darkgreen', width: '40.625%'}}></S.HatchedBox>
            </S.BackgroundBox>
          </S.Row>

          <S.Row>
            <S.Skill variant="h7">
              Kotlin
            </S.Skill>
            <S.BackgroundBox>
              <S.HatchedBox style={{backgroundColor: 'purple', width: '12.5%'}}></S.HatchedBox>
            </S.BackgroundBox>
          </S.Row>

          <S.Row>
            <S.Skill variant="h7">
              Angular
            </S.Skill>
            <S.BackgroundBox>
              <S.HatchedBox style={{backgroundColor: 'red', width: '40.625%'}}></S.HatchedBox>
            </S.BackgroundBox>
          </S.Row>

          <S.Row>
            <S.Skill variant="h7">
              AWS
            </S.Skill>
            <S.BackgroundBox>
              <S.HatchedBox style={{backgroundColor: 'yellow', width: '20%'}}></S.HatchedBox>
            </S.BackgroundBox>
          </S.Row>
        </S.SkillsColumn>
      </S.Div>
      <S.Divider style={{margin: '0 2rem'}}></S.Divider>
    </div>
  );
}
