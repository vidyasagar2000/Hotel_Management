import {
  HiOutlineBanknotes,
  HiOutlineBriefcase,
  HiOutlineCalendarDays,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Stat from "./Stat";
import { formatCurrency } from "../../utils/helpers";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";

function Stats({ bookings, confirmedStays, numDays, cabinCount }) {
  const numBookings = bookings?.length;
  const totalSales = bookings?.reduce((acc, cur) => acc + cur.totalPrice, 0);
  const checkins = confirmedStays?.length;
  const occupanyRate =
    confirmedStays.reduce((acc, cur) => acc + cur.numNights, 0) /
    (numDays * cabinCount);

  return (
    <>
      <Stat
        title="Bookings"
        color="blue"
        icon={<HiOutlineBriefcase />}
        value={numBookings}
      />
      <Stat
        title="Sales"
        color="green"
        icon={<HiOutlineBanknotes />}
        value={formatCurrency(totalSales)}
      />
      <Stat
        title="Check ins"
        color="indigo"
        icon={<HiOutlineCalendarDays />}
        value={checkins}
      />
      <Stat
        title="Occupancy Rate"
        color="yellow"
        icon={<HiOutlineChartBar />}
        value={Math.round(occupanyRate * 100) + "%"}
      />
      <div>Todays Activity</div>
      <DurationChart confirmedStays={confirmedStays} />
      <SalesChart bookings={bookings} numDays={numDays} />
    </>
  );
}

export default Stats;
