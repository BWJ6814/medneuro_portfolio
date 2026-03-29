import { SectionImage } from '../components/doc/SectionImage'
import { midP, midWrap, ol1, strong1 } from './docHierarchy'
import { OVERVIEW_IMAGES } from '../data/overviewImages'

export function ProjectBackgroundArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.projectBackground}
        alt="MedNeuro 프로젝트 배경 — NIfTI 뇌 영상 기반 종양 시각화 서비스"
        caption="프로젝트 배경"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>의료 영상 해석의 부담</span>
          <div className={midWrap}>
            <p className={midP}>
              뇌 MRI 등 볼륨 데이터는 전문 뷰어 없이는 슬라이스 단위로만 보기
              어렵고, 연구·교육·협진에서 동일한 화면을 공유하기도 번거롭습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>NIfTI·3D 시각화의 필요성</span>
          <div className={midWrap}>
            <p className={midP}>
              NIfTI 형식은 뇌 영상 연구에서 널리 쓰이며, 업로드한 뒤 2D 슬라이스와
              3D 볼륨을 함께 보면 병변 위치·형태를 직관적으로 설명할 수 있습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function ProjectGoalsArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.projectGoals}
        alt="MedNeuro 프로젝트 목표"
        caption="프로젝트 목표"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>NIfTI 업로드 및 검증</span>
          <div className={midWrap}>
            <p className={midP}>
              브라우저에서 뇌 영상 파일을 안정적으로 올리고, 형식·크기 등 기본
              검증을 거쳐 이후 파이프라인으로 넘기는 것을 목표로 합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>2D·3D 동시 탐색</span>
          <div className={midWrap}>
            <p className={midP}>
              축면 슬라이스(2D)와 볼륨 렌더링(3D)을 한 워크스페이스에서 제공해,
              종양 영역을 위치·깊이 관점에서 설명할 수 있게 합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>임상·연구 발표에 맞는 UI</span>
          <div className={midWrap}>
            <p className={midP}>
              과도한 장식 없이 대비가 분명한 흑백 기반 UI로, 슬라이드·스크린샷에
              옮겨도 읽기 쉬운 화면을 지향합니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function ArchitectureArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.architecture}
        alt="MedNeuro 시스템 아키텍처"
        caption="시스템 아키텍쳐"
      />

      <ol className={ol1}>
        <li>
          <span className={strong1}>클라이언트 (React)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">역할:</span> 업로드 UI,
              2D 슬라이서, 3D 뷰 포트, 세션 상태 관리.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>영상 처리·API 계층</span>
          <div className={midWrap}>
            <p className={midP}>
              NIfTI 디코딩, 메타데이터 추출, 2D 타일·3D 메쉬/텍스처 준비 등은
              백엔드 또는 전용 워커에서 수행하고, 클라이언트는 REST/WebSocket 등
              계약에 맞춰 데이터를 받습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>저장소</span>
          <div className={midWrap}>
            <p className={midP}>
              사용자·세션·작업 큐 등은 관계형 DB에, 대용량 원본·중간 산출물은
              객체 스토리지 또는 파일 볼륨에 두는 구성을 전제로 다이어그램을
              구성했습니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function TeamRolesArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.teamRoles}
        alt="MedNeuro 팀원 및 역할"
        caption="팀원 역할 분배"
      />
    </div>
  )
}

export function ScheduleArticle() {
  return (
    <div className="max-w-none space-y-10">
      <div>
        <ol className={ol1}>
          <li>
            <span className={strong1}>조원 전체 일정</span>
            <div className={midWrap}>
              <p className={midP}>
                전체 프로젝트 기간 동안 팀 단위 마일스톤·병렬 작업을 한 장의
                일정표로 정리했습니다. 주차별 회의와 통합 구간은 도표에서
                확인할 수 있습니다.
              </p>
            </div>
          </li>
        </ol>
        <SectionImage
          src={OVERVIEW_IMAGES.scheduleTeam}
          alt="MedNeuro 팀 프로젝트 일정"
          caption="프로젝트 일정 (팀)"
        />
      </div>
      <div>
        <ol className={`${ol1} list-none`}>
          <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
            <span className={strong1}>개인 일정 (PM · 변운조)</span>
            <div className={midWrap}>
              <p className={midP}>
                담당 범위인 업로드·2D 뷰어·연동 구간 위주로 주차별 계획과 달성
                여부를 표로 관리했습니다. 
              </p>
            </div>
          </li>
        </ol>
        <SectionImage
          src={OVERVIEW_IMAGES.schedulePersonal}
          alt="변운조 개인 프로젝트 일정"
          caption="개인 일정"
        />
      </div>
    </div>
  )
}
