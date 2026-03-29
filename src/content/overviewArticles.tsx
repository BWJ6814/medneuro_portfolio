import { SectionImage } from '../components/doc/SectionImage'
import {
  dashLi,
  dashUl,
  midP,
  midWrap,
  ol1,
  strong1,
} from './docHierarchy'
import { OVERVIEW_IMAGES } from '../data/overviewImages'

export function ProjectBackgroundArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.projectBackground}
        alt="Law Partner 서비스 소개: 기존 법률 프로세스의 어려움과 AI·구독 기반 솔루션"
        caption="프로젝트 배경 — 법률 상담 사이트 Law Partner"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>법률 서비스의 높은 문턱</span>
          <div className={midWrap}>
            <p className={midP}>
              일반인에게 법률 용어는 어렵고, 변호사 상담 비용은 부담스러워 초기
              대응 시기를 놓치는 경우가 많습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>정보의 비대칭성</span>
          <div className={midWrap}>
            <p className={midP}>
              내 사건에 딱 맞는 판례나 법률 정보를 찾기 어렵고, 수많은 변호사 중
              누구를 선택해야 할지 판단 기준이 모호합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>기술적 기회</span>
          <div className={midWrap}>
            <p className={midP}>
              최근 발전한 RAG(검색 증강 생성) 기술을 활용하면, 방대한 법률
              데이터를 기반으로 정확도 높은 초동 상담 서비스를 제공할 수 있다는
              가능성을 확인했습니다.
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
      <ol className={ol1}>
        <li>
          <span className={strong1}>24/7 즉각적인 법률 가이드</span>
          <div className={midWrap}>
            <p className={midP}>
              시간과 장소에 구애받지 않고 사용자의 상황에 맞는 법률 분석 리포트를
              AI가 즉시 생성해 주는 서비스를 지향합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>신뢰할 수 있는 데이터 기반 상담</span>
          <div className={midWrap}>
            <p className={midP}>
              단순 AI 답변이 아니라, 실제 법령과 판례 데이터를 참조하는 RAG
              시스템을 구축하여 할루시네이션(환각 현상)을 최소화합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>전문가 연결의 효율화</span>
          <div className={midWrap}>
            <p className={midP}>
              AI 상담 결과를 바탕으로 해당 분야에 특화된 전문 변호사를 매칭하여,
              상담의 질을 높이고 예약까지 이어지는 올인원 환경을 구축합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>사용자 경험(UX) 최적화</span>
          <div className={midWrap}>
            <p className={midP}>
              React와 비동기 통신(Axios)을 활용해 복잡한 법률 데이터를 사용자가 보기
              편한 대시보드 형태로 제공합니다.
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
        alt="LawPartner 시스템 아키텍처: 프론트엔드, 메인 서버, AI 서버, DB, CI/CD"
        caption="시스템 아키텍처 다이어그램"
      />

      <ol className={ol1}>
        <li>
          <span className={strong1}>프론트엔드 (Frontend)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">기술 스택</span>
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>React</li>
              <li className={dashLi}>TailwindCSS</li>
              <li className={dashLi}>Axios</li>
            </ul>
            <p className={midP}>
              <span className="font-medium text-slate-700">역할:</span> 사용자
              인터페이스(UI)를 제공하며, Axios를 통해 메인 서버와 통신합니다. JWT를
              포함한 HTTP/WSS 요청으로 보안과 실시간성을 확보합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>메인 서버 (Main Server)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">기술 스택</span>
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>Spring Boot</li>
              <li className={dashLi}>WebSocket</li>
              <li className={dashLi}>JWT</li>
            </ul>
            <p className={midP}>
              <span className="font-medium text-slate-700">역할:</span> 서비스의
              중심 로직을 담당합니다. 클라이언트의 인증(JWT)을 관리하고, 실시간
              통신이 필요한 기능은 WebSocket으로 처리하며 AI 서버 및 DB 서버와
              데이터를 주고받습니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>AI 서버 (AI Server)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">기술 스택</span>
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>FastAPI</li>
              <li className={dashLi}>LangChain</li>
              <li className={dashLi}>LLM 모델</li>
            </ul>
            <p className={midP}>
              <span className="font-medium text-slate-700">역할:</span> 고성능
              비동기 프레임워크인 FastAPI를 기반으로 구축되었습니다. LangChain을
              활용해 LLM(거대 언어 모델)을 제어하고 지능형 답변을 생성합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>DB 서버 (Database Server)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">기술 스택</span>
            </p>
            <ul className={dashUl}>
              <li className={dashLi}>Oracle</li>
              <li className={dashLi}>FAISS</li>
            </ul>
            <p className={midP}>
              <span className="font-medium text-slate-700">역할:</span> 일반적인
              정형 데이터는 Oracle에 저장하며, AI의 빠른 유사도 검색 및 벡터
              데이터 처리를 위해 FAISS 벡터 데이터베이스를 병행하여 사용합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>CI/CD 및 협업 도구</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">배포:</span> GitHub
              Actions를 통한 자동화 빌드, Docker 컨테이너라이징을 거쳐 Amazon EC2
              환경에 배포됩니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">협업:</span> Discord,
              Notion, GitHub을 통해 팀원 간 실시간 소통 및 코드 관리를 진행합니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function NetworkDiagramArticle() {
  return (
    <div className="max-w-none">
      <SectionImage
        src={OVERVIEW_IMAGES.network}
        alt="DMZ, 방화벽, 로드밸런서, Nginx·React, Spring Boot, FastAPI, RDS 네트워크 구조"
        caption="네트워크 구조도"
      />
      <ol className={ol1}>
        <li>
          <span className={strong1}>시스템 개요</span>
          <div className={midWrap}>
            <p className={midP}>
              본 시스템은 DMZ 구간을 설정하여 외부 인터넷과 내부 자원을
              분리함으로써 보안성을 극대화한 구조입니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>보안 계층 (Firewall &amp; DMZ)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                외부 방화벽(External Firewall):
              </span>{' '}
              외부 사용자의 비정상적인 접근을 1차적으로 차단합니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">DMZ:</span> 외부망과
              내부망 사이의 완충 구역입니다. 외부에서 직접 접근이 가능한 Web
              Server를 배치하여 내부 서버를 보호합니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                내부 방화벽(Internal Firewall):
              </span>{' '}
              외부에서 내부 어플리케이션 서버(WAS)나 데이터베이스로 직접 침투하는
              것을 차단하는 강력한 2차 방어선입니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>
            웹 서버 및 부하 분산 (Web Server &amp; Load Balancer)
          </span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">Load Balancer:</span>{' '}
              대량의 접속 요청을 여러 대의 서버로 고르게 분산시켜 시스템의 안정성을
              높입니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                Web Server (Nginx, React):
              </span>{' '}
              정적 컨텐츠(이미지, HTML 등)를 빠르게 전달하며, 요청을 내부 WAS로
              전달하는 프록시 역할을 수행합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>
            어플리케이션 계층 (WAS — Spring Boot &amp; FastAPI)
          </span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                Spring Boot (Port 8080):
              </span>{' '}
              메인 비즈니스 로직과 API 처리를 담당합니다.
            </p>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                FastAPI (Port 8000):
              </span>{' '}
              데이터 분석이나 AI 연산 등 고성능 비동기 처리가 필요한 기능을
              분담합니다.
            </p>
          </div>
        </li>
        <li>
          <span className={strong1}>데이터 저장 계층 (Database)</span>
          <div className={midWrap}>
            <p className={midP}>
              <span className="font-medium text-slate-700">
                Amazon RDS MySQL:
              </span>{' '}
              최하단 내부망에 위치하여 데이터의 안전성을 보장하며, 클라우드 기반의
              통합 데이터 관리를 수행합니다.
            </p>
          </div>
        </li>
      </ol>
    </div>
  )
}

export function TeamRolesArticle() {
  return (
    <div className="max-w-none overflow-x-auto">
      <table className="w-full min-w-[280px] border-collapse overflow-hidden rounded-lg border border-slate-200 text-left text-sm text-slate-700">
        <thead>
          <tr className="bg-[#0047AB]/[0.08] text-slate-900">
            <th className="border-b border-slate-200 px-4 py-3 font-bold">
              팀원
            </th>
            <th className="border-b border-slate-200 px-4 py-3 font-bold">
              담당 업무
            </th>
          </tr>
        </thead>
        <tbody>
          {[
            ['김민수', '메인/일반 마이페이지, 1:1 채팅, 헤더 알림 개발'],
            [
              '홍승현',
              '공통 API 객체·보안·AOP, 로그인/회원가입, 관리자 페이지 개발',
            ],
            [
              '변운조 (PM)',
              '상담 게시판(CRUD), RAG 기반 AI 채팅 상담 페이지 개발',
            ],
            ['김용', 'KY 디렉토리, 결제 페이지, 변호사 마이페이지 개발'],
            [
              '임동주',
              'LDJ 관련 디렉토리, 변호사 찾기, 변호사 상세, 고객센터 개발',
            ],
          ].map(([name, role]) => (
            <tr key={name} className="border-b border-slate-100 bg-white last:border-0">
              <td className="whitespace-nowrap px-4 py-3 font-semibold text-[#0047AB]">
                {name}
              </td>
              <td className="px-4 py-3">{role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function ScheduleArticle() {
  return (
    <div className="max-w-none space-y-8">
      <div>
        <ol className={ol1}>
          <li>
            <span className={strong1}>팀 프로젝트 일정</span>
            <div className={midWrap}>
              <p className={midP}>
                1차·2차 프로젝트 구간별 업무별 담당과 기간을 간트 차트로
                정리했습니다. 매주 금요일은 프로젝트 회의, 코드 리뷰, 단위 테스트를
                진행했습니다.
              </p>
            </div>
          </li>
        </ol>
        <SectionImage
          src={OVERVIEW_IMAGES.scheduleTeam1}
          alt="팀 프로젝트 스케줄 1차 — 업무명·담당·주차별 간트"
          caption="팀 스케줄 (1/2)"
        />
        <SectionImage
          src={OVERVIEW_IMAGES.scheduleTeam2}
          alt="팀 프로젝트 스케줄 2차 — 업무명·담당·주차별 간트"
          caption="팀 스케줄 (2/2)"
        />
      </div>
      <div>
        <ol className={`${ol1} list-none`}>
          <li className="relative pl-5 before:absolute before:left-0 before:font-semibold before:text-slate-900 before:content-['2.'] sm:pl-6">
            <span className={strong1}>개인 업무 일정 (PM · 변운조)</span>
            <div className={midWrap}>
              <p className={midP}>
                주차별 업무 계획과 달성률을 표로 관리했습니다. 상담 게시판·AI 법률
                상담 채팅 관련 기획·구현·연동 일정이 포함됩니다.
              </p>
            </div>
          </li>
        </ol>
        <SectionImage
          src={OVERVIEW_IMAGES.schedulePersonal1}
          alt="개인 스케줄 1주차~3주차 — 업무계획·달성률"
          caption="개인 스케줄 (1/2)"
        />
        <SectionImage
          src={OVERVIEW_IMAGES.schedulePersonal2}
          alt="개인 스케줄 4주차~7주차 — 업무계획·달성률"
          caption="개인 스케줄 (2/2)"
        />
      </div>
    </div>
  )
}
